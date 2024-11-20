"user server"

const { sql } = require("@vercel/postgres")

const allPuuids = [
  "UwRfVxejoOOl2vfhjWiqitKXQrYN1NOqfgBiAvkOa7XLdLDwi7ZYe-sXDr-H1glgNDqmQVrGm6Oiqw", //Panger
  "ocCbMiunKkcoR5_NJBQSxNffN4007xoidCwR8eZD_uWggHOS1Q_Q4nd_j_U-WjBQ0lXGsuBV2S8OGw", //Jules
  "BDGMzoAb4w5FMUrks8kQWg1jnUx5nbMC1aKm6K-XebxufW2CF9A6Gm_hYZ23k6s7sv0w_gKKr0ebhw", //Ylli
  "Wwed7SIkF9Ep6KoQBbC5leVMa9ysSDm8q32EqZRrnj6m-xB_Yl326j-GIGLPccp-ShO9neSgPcmaVw", //Steven
  "GS_E7SHHAp54K2CR-9B3KE9LjbBdun50sSEyjsH923uUAj0ppyWt2rr_4z05KF1dnU_AEruvPF1p0A", // Burim
]

const RiotKey = process.env.RIOT_KEY
console.log(RiotKey)

async function GetPlayerInfo1(puuid) {
  const res = await fetch(
    `https://europe.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=${RiotKey}`,
    {
      next: {
        revalidate: 0,
      },
    }
  )
  const data = await res.json()
  console.log(data)
  return data
}

async function GetPlayerInfo2(puuid) {
  const res = await fetch(
    `https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-puuid/${puuid}?api_key=${RiotKey}`,
    {
      next: {
        revalidate: 0,
      },
    }
  )
  const data = await res.json()
  console.log(data)
  return data
}

async function GetPlayerInfo3(summonerId) {
  const res = await fetch(
    `https://euw1.api.riotgames.com/tft/league/v1/entries/by-summoner/${summonerId}?api_key=${RiotKey}`,
    {
      next: {
        revalidate: 0,
      },
    }
  )
  const data = await res.json()
  console.log(data)
  return data
}

async function GetPlayerInfoCombined(puuid) {
  const playerInfo1 = await GetPlayerInfo1(puuid)
  const playerInfo2 = await GetPlayerInfo2(puuid)
  const playerInfo3 = await GetPlayerInfo3(playerInfo2.id)

  const playerInfoCombined = {
    ...playerInfo1,
    ...playerInfo2,
    ...playerInfo3[0],
  }
  return playerInfoCombined
}

export default async function UpdatePlayerInfo() {
  const allPlayerInfo = []
  for (let puuid of allPuuids) {
    let playerInfo = await GetPlayerInfoCombined(puuid)
    await sql`
      UPDATE playerinfo
      SET tier = ${playerInfo.tier}, rank = ${playerInfo.rank}, wins = ${playerInfo.wins}, losses = ${playerInfo.losses},  profileiconid = ${playerInfo.profileIconId}, leaguepoints = ${playerInfo.leaguePoints}, summonerid = ${playerInfo.id}
      WHERE puuid = ${playerInfo.puuid};
    `
    allPlayerInfo.push(playerInfo)
  }
  return allPlayerInfo
}
