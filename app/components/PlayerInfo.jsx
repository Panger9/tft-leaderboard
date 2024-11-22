import React from "react"
import PlayerPanel from "./PlayerPanel"
import RefreshButton from "./RefreshButton"
import { GetPlayerInfoSorted } from "../service/applicationLogic"

export default async function PlayerInfo() {
  const allPlayerInfo = await GetPlayerInfoSorted()
  console.log(allPlayerInfo)

  return (
    <div className="flex flex-col w-full gap-3 rounded-2xl  my-3">
      {allPlayerInfo.map((e, index) => (
        <PlayerPanel
          key={e.id}
          gameName={e.gamename}
          profileIconId={e.profileiconid}
          tier={e.tier}
          tagLine={e.tagline}
          rank={e.rank}
          wins={e.wins}
          losses={e.losses}
          index={index}
          leaguePoints={e.leaguepoints}
        />
      ))}

      <div></div>
    </div>
  )
}
