"use client"

import Link from "next/link"
import React from "react"
import Image from "next/image"
import { unstable_noStore } from "next/cache"

export default function PlayerPanel(p) {
  unstable_noStore()
  return (
    <div
      className="flex flex-row w-full justify-between bg-gradient-to-r from-gray-900 to-blue-950 rounded-2xl py-3 px-4 items-center hover:scale-[1.003]  "
      style={{ boxShadow: "3px 3px 12px rgba(0,0,0,0.5) " }}
    >
      <div className="flex items-center gap-3 flex-[1] min-w-12 max-w-64">
        <div className="text-4xl flex justify-start text-white flex-[0.7] px-1">
          {p.index + 1}.
        </div>
        <div>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.14.1/img/profileicon/${p.profileIconId}.png`}
            width={48}
            height={48}
            className="rounded-full border-2 border-blue-200"
            alt="Profil Icon"
            onError={(e) => {
              e.target.onerror = null // Verhindert eine Endlosschleife, falls das alternative Bild ebenfalls nicht geladen werden kann
              e.target.src = "/Unknown_player.png" // Pfad zu deinem alternativen Bild im `public`-Ordner
            }}
          />
        </div>
        <div className="flex flex-row flex-[6] min-w-12 overflow-hidden">
          <div className="flex flex-col">
            <div className="flex flex-row gap-3 items-center overflow-hidden">
              <p className="font-bold text-lg text-blue-300 truncate">
                {p.gameName}
              </p>
            </div>
            <div className="flex flex-row gap-1 text-xs text-gray-400 font-bold truncate">
              <p>{p.tier ? p.tier : "UNRANKED"}</p>
              <p>{p.rank}</p>
              <p>{p.leaguePoints + " LP"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-row justify-around items-center truncate overflow-hidden">
        <div className="flex flex-row  overflow-hidden">
          <div className="flex flex-col">
            <p className="text-emerald-500 text-sm font-bold truncate">
              {p.wins ? p.wins : "0"} W
            </p>
            <p className="text-red-500 truncate text-sm font-bold">
              {p.losses ? p.losses : "0"} L
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <p className="text-gray-300 text-sm font-bold truncate">
            {p.wins + p.losses}
          </p>
          <p className="text-gray-300 text-sm font-bold truncate">games</p>
        </div>
        <div className="font-bold text-gray-100">
          {p.wins > 0 && p.losses > 0 && (
            <p className=" truncate text-xl ">
              {Math.round((p.wins / (p.wins + p.losses)) * 100)}%
            </p>
          )}
          {p.wins > 0 && p.losses == null && (
            <p className=" truncate text-xl ">100%</p>
          )}
          {p.wins == null && p.losses == null && (
            <p className=" truncate text-xl ">0%</p>
          )}
        </div>
      </div>

      <div className="flex flex-row  gap-5 items-center justify-end mr-2">
        <a
          href={`https://www.metatft.com/player/euw/${p.gameName}-${p.tagLine}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer  hover:scale-105 hover:opacity-90 active:scale-95"
        >
          <img
            src="/metatft_logo.svg" // Korrigierter Dateiname ohne Leerzeichen
            className="w-8"
            alt="TFT Tactics Logo"
          />
        </a>
        <a
          href={`https://tactics.tools/player/euw/${p.gameName}/${p.tagLine}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer  hover:scale-105 hover:opacity-90 active:scale-95"
        >
          <img
            src="/tfttactics_logo 1.png" // Korrigierter Dateiname ohne Leerzeichen
            className="w-9"
            alt="TFT Tactics Logo"
          />
        </a>
        <a
          href={`https://lolchess.gg/profile/euw/${p.gameName}-${p.tagLine}/set13`}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer  hover:scale-105 hover:opacity-90 active:scale-95"
        >
          <img
            src="/lolchessgg_logo_bkbg 1.png" // Korrigierter Dateiname ohne Leerzeichen
            className="w-9"
            alt="TFT Tactics Logo"
          />
        </a>
      </div>
    </div>
  )
}
