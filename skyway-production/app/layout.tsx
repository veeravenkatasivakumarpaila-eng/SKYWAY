import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'Skyway — World in Motion',description:'Real-time global travel and transportation intelligence: flights, destinations, hotels, transport and trip planning.',metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||'https://example.com'),openGraph:{title:'Skyway — World in Motion',description:'Track the world. Discover your destination. Plan your journey.'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
