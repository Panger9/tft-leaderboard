// src/components/RefreshButton.jsx

"use client"

import React, { useState } from "react"

export default function RefreshButton() {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  async function handleRefetch() {
    setIsPending(true)
    setError(false)

    const res = await fetch("/api/postgres", {
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
    <div className="w-full flex-col justify-center items-center">
      {isPending ? (
        <button
          className=" w-full mt-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-2xl py-3 px-4 items-center transform transition-transform"
          style={{ boxShadow: "3px 10px 14px rgba(0,0,0,0.6)" }}
          disabled
        >
          lädt...
        </button>
      ) : (
        <button
          className=" w-full mt-4 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl py-3 px-4 items-center transform transition-transform hover:scale-105 active:scale-95"
          style={{ boxShadow: "3px 10px 14px rgba(0,0,0,0.6)" }}
          onClick={handleRefetch}
        >
          Refresh
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
