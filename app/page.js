import Image from "next/image";
import PlayerInfo from "./components/PlayerInfo";


export default function Home() {
  return (
    <main className="flex flex-col justify-center w-3/4 items-center ">
      <h2 className="text-6xl  mt-20 mb-10">LEADERBOARD</h2>
      <PlayerInfo/>
    </main>
  );
}
