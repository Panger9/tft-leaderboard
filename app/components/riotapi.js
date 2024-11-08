// alle puuids:

const allPuuids = [
  "UwRfVxejoOOl2vfhjWiqitKXQrYN1NOqfgBiAvkOa7XLdLDwi7ZYe-sXDr-H1glgNDqmQVrGm6Oiqw", //Panger
  "ocCbMiunKkcoR5_NJBQSxNffN4007xoidCwR8eZD_uWggHOS1Q_Q4nd_j_U-WjBQ0lXGsuBV2S8OGw", //Jules
  "BDGMzoAb4w5FMUrks8kQWg1jnUx5nbMC1aKm6K-XebxufW2CF9A6Gm_hYZ23k6s7sv0w_gKKr0ebhw", //Ylli
  "Wwed7SIkF9Ep6KoQBbC5leVMa9ysSDm8q32EqZRrnj6m-xB_Yl326j-GIGLPccp-ShO9neSgPcmaVw", //Steven
  "GS_E7SHHAp54K2CR-9B3KE9LjbBdun50sSEyjsH923uUAj0ppyWt2rr_4z05KF1dnU_AEruvPF1p0A"  // Burim
]

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
  console.log(AllPlayerInfo)
  return AllPlayerInfo

}

async function GetAllPlayerInfoOld(puuid_array){

  const allPlayerInfo = [];

  for(let puuid of puuid_array){
    const playerInfo = await GetPlayerInfoCombined(puuid)
    allPlayerInfo.push(playerInfo)
  }

  return sortPlayersByElo(allPlayerInfo)
}