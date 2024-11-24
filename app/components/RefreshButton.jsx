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
    <div className="w-full flex-col justify-center items-center">
      {isPending ? (
        <button
          className="w-full mt-4 bg-gray-300 rounded-2xl py-3 px-4 items-center transform transition  easy-in-out duration-100 "
          style={{ boxShadow: "3px 10px 14px rgba(0,0,0,0.6)" }}
          disabled
        >
          beep... boop...
        </button>
      ) : (
        <button
          className="w-full mt-4 bg-blue-300 rounded-2xl py-3 px-4 items-center transform transition ease-in-out duration-100 hover:scale-[1.01] active:bg-blue-200"
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
