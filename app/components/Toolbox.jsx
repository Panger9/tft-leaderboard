import React from "react"
import ToolPanel from "./ToolPanel.jsx"
import RefreshButton from "./RefreshButton.jsx"

export default function Toolbox() {
  return (
    <div className="flex w-full h-[62px] gap-10 items-center w-min-10">
      <RefreshButton />
      <div className="flex-1 flex flex-row gap-2">
        <ToolPanel title="META TFT" link="https://www.metatft.com/" />
        <ToolPanel
          title="RANKED LADDER"
          link="https://www.metatft.com/leaderboard/euw"
        />
        <ToolPanel
          title="SOLOGESANG DOC"
          link="https://docs.google.com/spreadsheets/u/0/d/e/2PACX-1vQXGfKXwmtXV3JXkkvFW9kcvXtWdEpXq-5uohygcek-qM19CvuWTZYf5VwrgXqwMBVLhVomP0yp_jEZ/pubhtml?pli=1"
        />
        <ToolPanel
          title="TEAMBUILDER"
          link="https://www.metatft.com/team-builder"
        />
        <ToolPanel
          title="PATCHNOTES"
          link="https://www.leagueoflegends.com/en-gb/news/tags/teamfight-tactics-patch-notes/"
        />
      </div>
    </div>
  )
}
