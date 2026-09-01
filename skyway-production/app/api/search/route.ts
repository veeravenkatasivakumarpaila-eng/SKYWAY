import {NextRequest,NextResponse} from 'next/server';
export async function GET(req:NextRequest){const q=(req.nextUrl.searchParams.get('q')||'').trim();return NextResponse.json({query:q,results:q?[{type:'destination',name:q,slug:q.toLowerCase().replace(/\s+/g,'-')},{type:'flight',name:`Flights matching ${q}`},{type:'hotel',name:`Hotels in ${q}`}]:[]})}
