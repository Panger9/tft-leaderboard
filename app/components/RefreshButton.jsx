// src/components/RefreshButton.jsx

"use client"

import React from 'react'

export default function RefreshButton() {

  async function handleRefetch() {
    const res = await fetch('/api/postgres', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
      
    });
    const data = await res.json();
    console.log(data);
  }

  return (
    <button className='mt-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl py-3 px-4 items-center transform transition-transform hover:scale-105 active:scale-95'
      style={{ boxShadow: "3px 10px 14px rgba(0,0,0,0.6)" }}
      onClick={handleRefetch}
    >
      Refresh
    </button>
  )
}