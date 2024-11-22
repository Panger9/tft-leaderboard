import { sql } from "@vercel/postgres"

export async function DB_GetPlayerInfo() {
  const res = await sql`
    SELECT * FROM PlayerInfo
  `
  return res.rows
}

export async function DB_UpdatePlayerInfo(playerInfo) {
  await sql`
      UPDATE playerinfo
      SET tier = ${playerInfo.tier}, rank = ${playerInfo.rank}, wins = ${playerInfo.wins}, losses = ${playerInfo.losses},  profileiconid = ${playerInfo.profileIconId}, leaguepoints = ${playerInfo.leaguePoints}, summonerid = ${playerInfo.id}
      WHERE puuid = ${playerInfo.puuid};
    `
  return playerInfo
}

export async function DB_CreatePlayerInfo(playerInfo) {
  await sql`
      INSERT INTO playerinfo (gamename, tagline, tier, rank, wins, losses, profileiconid, leaguepoints, summonerid, puuid)
      VALUES (${playerInfo.gameName}, ${playerInfo.tagLine}, ${playerInfo.tier}, ${playerInfo.rank}, ${playerInfo.wins}, ${playerInfo.losses}, ${playerInfo.profileIconId}, ${playerInfo.leaguePoints}, ${playerInfo.id}, ${playerInfo.puuid});
    `
  return playerInfo
}

export async function DB_DeletePlayerInfo(puuid) {
  const res = await sql`
    DELETE FROM playerinfo
    WHERE puuid = ${puuid};
  `
  return res.rows
}
