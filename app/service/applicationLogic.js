import {
  DB_GetPlayerInfo,
  DB_UpdatePlayerInfo,
  DB_CreatePlayerInfo,
  DB_DeletePlayerInfo,
} from "../mappers/databaseMapper"
import {
  GetPlayerInfoCombined,
  GetPlayerInfoCombinedFromRiotId,
} from "../mappers/riotApiMapper"

export async function GetPlayerInfoSorted() {
  const allPlayers = await DB_GetPlayerInfo()
  const allPlayersSorted = sortPlayersByElo(allPlayers)
  return allPlayersSorted
}

function sortPlayersByElo(players) {
  const tierOrder = [
    "IRON",
    "BRONZE",
    "SILVER",
    "GOLD",
    "PLATINUM",
    "EMERALD",
    "DIAMOND",
    "MASTER",
    "GRANDMASTER",
    "CHALLENGER",
  ]
  const rankOrder = ["IV", "III", "II", "I"]

  return players.sort((a, b) => {
    if (tierOrder.indexOf(a.tier) !== tierOrder.indexOf(b.tier)) {
      return tierOrder.indexOf(b.tier) - tierOrder.indexOf(a.tier)
    }
    if (rankOrder.indexOf(a.rank) !== rankOrder.indexOf(b.rank)) {
      return rankOrder.indexOf(b.rank) - rankOrder.indexOf(a.rank)
    }
    return b.leaguepoints - a.leaguepoints
  })
}

export async function UpdateDatabase() {
  const updatedPlayerInfo = []
  try {
    const allPlayers = await DB_GetPlayerInfo()
    const allPuuids = allPlayers.map((x) => x.puuid)

    for (let puuid of allPuuids) {
      let playerInfo = await GetPlayerInfoCombined(puuid)
      await DB_UpdatePlayerInfo(playerInfo)
      updatedPlayerInfo.push(playerInfo)
    }
  } catch (error) {
    console.error("Error updating database:", error)
    throw new Error("Failed to update database")
  }
  return updatedPlayerInfo
}

export async function CreatePlayer(gameName, tagLine) {
  const playerInfo = await GetPlayerInfoCombinedFromRiotId(gameName, tagLine)

  await DB_CreatePlayerInfo(playerInfo)
  return playerInfo
}

export async function DeletePlayer(gameName, tagLine) {
  await DB_DeletePlayerInfo(gameName, tagLine)
}
