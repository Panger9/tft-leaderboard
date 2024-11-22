// app/api/update-player-info/route.js

import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"
import {
  GetPlayerInfoSorted,
  UpdateDatabase,
  CreatePlayer,
  DeletePlayer,
} from "@/app/service/applicationLogic"

export async function PUT() {
  try {
    const playerinfo = await UpdateDatabase()
    return NextResponse.json({ message: "Player info updated successfully" })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET() {
  try {
    const playerinfo = await GetPlayerInfoSorted()
    return NextResponse.json(playerinfo)
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { gameName, tagLine } = await request.json()

    if (!gameName || !tagLine) {
      return NextResponse.json(
        { error: "Missing required fields: gameName, tagLine" },
        { status: 400 }
      )
    }

    const newPlayer = await CreatePlayer(gameName, tagLine)
    return NextResponse.json(
      { message: "Player created successfully", player: newPlayer },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating player:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const { puuid } = await request.json()
    await DeletePlayer(puuid)
    return NextResponse.json({ message: `Player Deleted successfully` })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
