// app/api/update-player-info/route.js

import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import fetch from 'node-fetch';
import UpdatePlayerInfo from '@/app/components/riotapi';


export async function PUT() {

  try {
    await UpdatePlayerInfo();
    return NextResponse.json({ message: 'Player info updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}