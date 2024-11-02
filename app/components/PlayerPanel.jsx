import React from 'react'
import Image from 'next/image'

export default function PlayerPanel(p) {
  return (

    <div className='flex  flex-row '>

      <img src={`https://ddragon.leagueoflegends.com/cdn/14.14.1/img/profileicon/${p.profileIconId}.png`} width={64} ></img>

      <div className='flex-row flex' >

        <div className='flex flex-col'>
          <a target="_blank" href={`https://www.metatft.com/player/euw/${p.gameName}-${p.tagLine}`} >
            <div className='flex-row flex gap-3'>
              <p>{p.gameName}</p>
              <p>#{p.tagLine}</p>
            </div>
          </a>

          <div className='flex-row flex gap-1'>
            <p>{p.tier}</p>
            <p>{p.rank}</p>
            <p>{p.leaguePoints ? p.leaguePoints + 'LP' : ''}</p>
          </div>
        </div>

        <div className='flex flex-col'>
          <div>
            <p>{p.wins}</p>
            <p>{p.losses}</p>
          </div>
        </div>

      </div>

      <div>
      {p.index + 1}
      </div>

    </div>
  )
}
