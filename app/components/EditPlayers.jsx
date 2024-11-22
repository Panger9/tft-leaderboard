"use client"

import React, { useState, useEffect } from "react"

export default function EditPlayers() {
  const [gameName, setGameName] = useState("")
  const [tagLine, setTagLine] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const admin = localStorage.getItem("admin") === "1234"
    setIsAdmin(admin)
  }, [])

  async function handleAddPlayer() {
    const res = await fetch(`/api/service`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameName, tagLine }),
    })
    // Optional: Handle response
  }

  async function handleDeletePlayer() {
    const res = await fetch(`/api/service`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ gameName, tagLine }),
    })
    // Optional: Handle response
  }

  return (
    <>
      {isAdmin ? (
        <div className="flex gap-3 p-3 bg-blue-300 rounded mb-20">
          <div className="flex gap-3">
            <input
              className="flex-4 px-2 py-1"
              type="text"
              placeholder="Summoner Name"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
            />
            <input
              className="flex-1 px-2 py-1 2-1/4"
              type="text"
              placeholder="#TAG"
              value={tagLine}
              onChange={(e) => setTagLine(e.target.value)}
            />
          </div>

          <div className="flex gap-1">
            <button onClick={handleAddPlayer} className="bg-emerald-600 p-1">
              ADD
            </button>
            <button onClick={handleDeletePlayer} className="bg-red-500 p-1">
              Delete
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
