"use server"

const RiotKey = process.env.RIOT_KEY

async function GetPlayerInfo1FromRiotId(gameName, tagLine) {
  const res = await fetch(
    `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${RiotKey}`,
    {
      next: {
        revalidate: 0,
      },
    }
  )
  const data = await res.json()
  return data
}

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
  return data
}

export async function GetPlayerInfoCombined(puuid) {
  const playerInfo1 = await GetPlayerInfo1(puuid)
  const playerInfo2 = await GetPlayerInfo2(puuid)
  const playerInfo3 = await GetPlayerInfo3(playerInfo2.id)

  const playerInfoCombined = CombinePlayerInfo(
    playerInfo1,
    playerInfo2,
    playerInfo3
  )

  return playerInfoCombined
}

export async function GetPlayerInfoCombinedFromRiotId(gameName, tagLine) {
  const playerInfo1 = await GetPlayerInfo1FromRiotId(gameName, tagLine)
  const playerInfo2 = await GetPlayerInfo2(playerInfo1.puuid)
  const playerInfo3 = await GetPlayerInfo3(playerInfo2.id)
  const playerInfoCombined = CombinePlayerInfo(
    playerInfo1,
    playerInfo2,
    playerInfo3
  )

  return playerInfoCombined
}

async function CombinePlayerInfo(playerInfo1, playerInfo2, playerInfo3) {
  const playerInfoCombined = {
    ...playerInfo1,
    ...playerInfo2,
    ...playerInfo3.find((x) => x.queueType === "RANKED_TFT"),
  }
  return playerInfoCombined
}
