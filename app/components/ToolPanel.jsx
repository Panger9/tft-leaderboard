import React from "react"

export default function ToolPanel(p) {
  return (
    <a
      className="flex-1 rounded-2xl flex items-center justify-center bg-[#7eb4ff] hover:bg-blue-300 h-[62px] active:bg-blue-200 cursor-pointer relative min-w-6 tool-panel"
      style={{ boxShadow: "3px 3px 12px rgba(0,0,0,0.5) " }}
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/icons8-external-link-192.png"
        alt=""
        className="w-[15px] absolute top-1 right-2"
      />

      <div className="font-bold text-xs whitespace-nowrap overflow-hidden text-ellipsis min-w-6">
        {p.title}
      </div>
    </a>
  )
}
