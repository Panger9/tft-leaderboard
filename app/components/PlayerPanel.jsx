import React from 'react'
import Image from 'next/image'

export default function PlayerPanel(p) {
  return (
    <div className='flex flex-row w-full justify-between bg-slate-800 rounded-2xl py-2 px-4 items-center'>
      <img src={`https://ddragon.leagueoflegends.com/cdn/14.14.1/img/profileicon/${p.profileIconId}.png`} width={64} className='rounded-2xl' ></img>

      <div className='flex flex-row w-1/3'>
        <div className='flex flex-col'>
          <a target="_blank" href={`https://www.metatft.com/player/euw/${p.gameName}-${p.tagLine}`} >
            <div className='flex flex-row gap-3'>
              <p>{p.gameName}</p>
              <p>#{p.tagLine}</p>
            </div>
          </a>
          <div className='flex flex-row gap-1'>
            <p>{p.tier ? p.tier : "UNRANKED"}</p>
            <p>{p.rank}</p>
            <p>{p.leaguePoints ? p.leaguePoints + 'LP' : ''}</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-1/6'>
        <div>
          <p className='text-emerald-500'>{p.wins ? p.wins : "0"} W</p>
          <p className='text-red-500'>{p.losses ? p.losses : "0"} L</p>
        </div>
      </div>

      <div className='text-4xl  w-1/12 flex justify-center'>
        {p.index + 1}.
      </div>
    </div>
  )
}