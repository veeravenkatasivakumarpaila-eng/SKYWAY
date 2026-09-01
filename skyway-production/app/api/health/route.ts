import { NextResponse } from 'next/server'; export async function GET(){return NextResponse.json({ok:true,service:'skyway',timestamp:new Date().toISOString()})}
