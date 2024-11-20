import React from 'react'
import PlayerPanel from './PlayerPanel'
import { sql } from '@vercel/postgres';
import { GET } from '../api/postgres/route';
import RefreshButton from './RefreshButton';
import UpdatePlayerInfo from './riotapi';

function sortPlayersByElo(players) {

  const tierOrder = ["IRON", "BRONZE", "SILVER", "GOLD", "PLATINUM", "EMERALD", "DIAMOND", "MASTER", "GRANDMASTER", "CHALLENGER"];
  const rankOrder = ["IV", "III", "II", "I"];

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

async function GetAllPlayerInfo(){

  const res = await sql`
    SELECT * FROM PlayerInfo
  `
  const allPlayers = res.rows
  return sortPlayersByElo(allPlayers)
}


export default async function PlayerInfo() {

  const allPlayerInfo = await GetAllPlayerInfo()
  console.log(allPlayerInfo)


  return (
    <div  className='flex flex-col w-2/3 gap-3 rounded-2xl p-3 '>
      
      {allPlayerInfo.map((e, index) => (
          <PlayerPanel key={e.id} gameName={e.gamename} profileIconId={e.profileiconid} tier={e.tier} tagLine={e.tagline} rank={e.rank} wins={e.wins} losses={e.losses} index={index} leaguePoints={e.leaguepoints} />
      ))}
      <RefreshButton  />
      <div></div>
    </div>

  )
}
