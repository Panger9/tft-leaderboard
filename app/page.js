import Image from "next/image"
import PlayerInfo from "./components/PlayerInfo"
import RefreshButton from "./components/RefreshButton"
import EditPlayers from "./components/EditPlayers"

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-3/4 items-center justify-center  ">
      <h2 className="text-4xl  mt-10 text-gray-200   ">
        "Es geht um Ehre und Stolz"
      </h2>
      <RefreshButton />
      <PlayerInfo />
      <EditPlayers />
    </main>
  )
}
