import Image from "next/image";
import PlayerInfo from "./components/PlayerInfo";


export default function Home() {
  return (
    <main className="flex flex-col justify-items-center w-full">
      <h2 className="text-6xl">LEADERBOARD</h2>
      <PlayerInfo/>
    </main>
  );
}
