import {NextResponse} from 'next/server';
const flights=[{number:'SKY472',carrier:'Skyway Airlines',origin:'London',destination:'Singapore',lat:51.5,lon:-1.2,speed:884,altitude:37000,status:'EN_ROUTE'},{number:'SKY218',carrier:'Skyway Airlines',origin:'Tokyo',destination:'Paris',lat:35.7,lon:139.7,speed:912,altitude:39000,status:'EN_ROUTE'},{number:'AZR905',carrier:'Azure Air',origin:'Dubai',destination:'Sydney',lat:25.2,lon:55.3,speed:896,altitude:36000,status:'EN_ROUTE'}];
export async function GET(){return NextResponse.json({updatedAt:new Date().toISOString(),source:'demo',flights})}
