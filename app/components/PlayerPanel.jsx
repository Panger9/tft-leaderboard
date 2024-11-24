"use client"

import Link from "next/link"
import React from "react"
import Image from "next/image"
import { unstable_noStore } from "next/cache"

export default function PlayerPanel(p) {
  unstable_noStore()
  return (
    <a
      target="_blank"
      href={`https://www.metatft.com/player/euw/${p.gameName}-${p.tagLine}`}
      className="block"
    >
      <div
        className="flex flex-row w-full justify-between bg-gradient-to-r from-gray-900 to-blue-950 rounded-2xl py-3 px-4 items-center transform transition-transform hover:scale-[1.015] active:scale-95 "
        style={{ boxShadow: "3px 10px 14px rgba(0,0,0,0.6) " }}
      >
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.14.1/img/profileicon/${p.profileIconId}.png`}
          width={64}
          className="rounded-full border-2 border-blue-200"
        ></img>

        <div className="flex flex-row w-1/3 overflow-hidden">
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

        <div className="flex flex-row w-1/5 items-center overflow-hidden">
          <div className="flex flex-col flex-1">
            <p className="text-emerald-500 truncate">
              {p.wins ? p.wins : "0"} W
            </p>
            <p className="text-red-500 truncate">
              {p.losses ? p.losses : "0"} L
            </p>
          </div>
          <div className="h-full w-px bg-gray-500 mx-4"></div>
          {p.wins > 0 && p.losses > 0 && (
            <p className="flex-1 truncate text-xl text-white">
              {Math.round((p.wins / (p.wins + p.losses)) * 100)}%
            </p>
          )}
          {p.wins > 0 && p.losses == null && (
            <p className="flex-1 truncate text-xl text-white">100%</p>
          )}
          {p.wins == null && p.losses == null && (
            <p className="flex-1 truncate text-xl text-white">0%</p>
          )}
        </div>

        <div className="text-4xl w-1/12 flex justify-center text-white">
          {p.index + 1}.
        </div>
      </div>
    </a>
  )
}
