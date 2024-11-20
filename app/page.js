import Image from "next/image"
import PlayerInfo from "./components/PlayerInfo"

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-3/4 items-center justify-center  ">
      <h2 className="text-4xl  mt-20 text-gray-200   ">
        "Es geht um Ehre und Stolz"
      </h2>
      <p className="text-sm  mb-10 text-gray-300   ">zitat ende</p>
      <PlayerInfo />
    </main>
  )
}
