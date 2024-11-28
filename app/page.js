import Image from "next/image"
import PlayerInfo from "./components/PlayerInfo"
import RefreshButton from "./components/RefreshButton"
import EditPlayers from "./components/EditPlayers"

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-4/5 items-center   ">
      <h1 className="text-4xl font-bold mt-10 text-gray-200 tracking-widest  ">
        LEADERBOARD
      </h1>
      <RefreshButton />
      <PlayerInfo />
      <EditPlayers />
    </main>
  )
}
