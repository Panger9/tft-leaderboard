import React from 'react'
import PlayerPanel from './PlayerPanel'

// alle puuids:

const allPuuids = [
  "mZFChQyv2o9RApIbqVEuQgzdqb3hEjoa16DrootWFlHIfXqFJs4u-86UjZp11c3Uun7YMT3FDiCsnQ", //Panger
  "hiRYfQC_MlqRjjA3MxduebV_Tpx9crqTssry9YsWz49u5Yba3M94OXO_T8M1WKcmREH68vhPJJ7j-g", //Jules
  "yIZChK3RHzFYylJEpmQq6Kcf3wbR5Bwrl1EPafhsPc1tFiI4Nhq-P8aXzIJZPKwbczPvPFYFVs_Okg", //Ylli
  "Wi99-6GvvVdH7VXrA-SP5jmYfSJvWwhIpy0fMcM2IZ35XLiTjHI5c8i7uTnRQSjwe5eamNQW32TU0g", //Steven
  "hVt4C2ld2tiOd7WTcIPLIjOKC7upcyxt98ASe7lVtOVF31Xlw5K1WQqmMqL0ekDM0jLQ0fkIGD5z2A" // Burim
]

const tierOrder = ["IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND", "MASTER", "GRANDMASTER", "CHALLENGER"];
const rankOrder = ["IV", "III", "II", "I"];

const RiotKey = process.env.RIOT_KEY;


async function GetPlayerInfo1(puuid){

  const res = await fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${RiotKey}` , {
    next: {
      revalidate: 20
    }
  });
  const data = await res.json();
  
  return data;
}

async function GetPlayerInfo2(puuid){

  const res = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${RiotKey}` , {
    next: {
      revalidate: 20
    }
  });
  const data = await res.json();
  
  return data;
}

async function GetPlayerInfo3(summonerId){

  const res = await fetch(`https://euw1.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${RiotKey}` , {
    next: {
      revalidate: 20
    }
  });
  const data = await res.json();
  return data;
}

async function GetPlayerInfoCombined(puuid){

  const PlayerInfo1 = await GetPlayerInfo1(puuid)
  const PlayerInfo2 = await GetPlayerInfo2(puuid)
  const PlayerInfo3 = await GetPlayerInfo3(PlayerInfo2.id)

  const AllPlayerInfo = {...PlayerInfo1, ...PlayerInfo2, ...PlayerInfo3[0]};
  return AllPlayerInfo

}

async function GetAllPlayerInfo(puuid_array){

  const allPlayerInfo = [];

  for(let puuid of puuid_array){
    const playerInfo = await GetPlayerInfoCombined(puuid)
    allPlayerInfo.push(playerInfo)
  }

  return sortPlayersByElo(allPlayerInfo)
}

function sortPlayersByElo(players) {
  return players.sort((a, b) => {
    if (tierOrder.indexOf(a.tier) !== tierOrder.indexOf(b.tier)) {
      return tierOrder.indexOf(b.tier) - tierOrder.indexOf(a.tier);
    }
    if (rankOrder.indexOf(a.rank) !== rankOrder.indexOf(b.rank)) {
      return rankOrder.indexOf(b.rank) - rankOrder.indexOf(a.rank);
    }
    return b.leaguePoints - a.leaguePoints;
  });
}

export default async function PlayerInfo() {

  const allPlayerInfo = await GetAllPlayerInfo(allPuuids)

  return (
    <div className='flex flex-col w-full gap-3 bg-slate-900 rounded-2xl p-3 '>
      {allPlayerInfo.map((e, index) => (
          <PlayerPanel key={e.id} gameName={e.gameName} profileIconId={e.profileIconId} tier={e.tier} tagLine={e.tagLine} rank={e.rank} wins={e.wins} losses={e.losses} index={index} leaguePoints={e.leaguePoints} />
      ))}
      
    </div>
  )
}
