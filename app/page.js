import Image from "next/image"
import PlayerInfo from "./components/PlayerInfo"
import RefreshButton from "./components/RefreshButton"
import EditPlayers from "./components/EditPlayers"
import Toolbox from "./components/Toolbox"

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-4/5 items-center   ">
      <h1 className="text-[50px] font-bold mt-8 text-gray-200 tracking-widest mb-8 ">
        LEADERBOARD
      </h1>

      <Toolbox></Toolbox>

      <PlayerInfo />
      <EditPlayers />
    </main>
  )
}
