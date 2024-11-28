// src/components/RefreshButton.jsx

"use client"

import React, { useState } from "react"

export default function RefreshButton() {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  async function handleRefetch() {
    setIsPending(true)
    setError(false)

    const res = await fetch("/api/service", {
      method: "PUT",
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    })
    if (!res.ok) {
      setError(true)
    }
    setIsPending(false)
    location.reload()
  }

  return (
    <div className="flex-1 justify-center items-center h-full">
      {isPending ? (
        <button
          className="w-full  bg-gray-300 rounded-2xl py-3 px-4 items-center h-full font-bold"
          style={{ boxShadow: "3px 3px 12px rgba(0,0,0,0.5) " }}
          disabled
        >
          beep... boop...
        </button>
      ) : (
        <button
          className="w-full bg-[#7eb4ff] rounded-2xl px-4 h-full items-center hover:bg-blue-300 active:bg-blue-200 font-bold "
          style={{ boxShadow: "3px 3px 12px rgba(0,0,0,0.5) " }}
          onClick={handleRefetch}
        >
          REFRESH
        </button>
      )}

      {error && (
        <p className="text-center mt-3 text-red-500">
          Hier ist etwas schief gelaufen :(
        </p>
      )}
    </div>
  )
}
