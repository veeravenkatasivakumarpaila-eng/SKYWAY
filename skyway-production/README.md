# Skyway — Production-Ready Full-Stack Starter

Skyway is a Next.js 16 + TypeScript starter for the global travel/transport intelligence product specified by the user.

## Included
- Modern responsive Skyway UI using the 60/30/10 color system.
- Interactive transport-style map surface with selectable flight markers.
- Search UI and API endpoint.
- Health and flight API routes.
- PostgreSQL/PostGIS-oriented Prisma schema.
- User, airline, airport, flight, booking and destination models.
- SEO metadata, robots.txt and sitemap.xml.
- Destination route example.
- Environment variable template.

## Important production note
The flight positions in this starter are DEMO DATA. Real global tracking and booking require licensed provider integrations. Do not label demo data as live in production.

## Local development
1. Install Node.js (use a current Active/Maintenance LTS release).
2. Copy `.env.example` to `.env.local`.
3. Set DATABASE_URL if using the database.
4. Run `npm install`.
5. Run `npx prisma generate`.
6. Run `npm run dev`.
7. Open http://localhost:3000.

## Database
For PostgreSQL, set DATABASE_URL and run:
`npx prisma db push`

For production, use migrations rather than `db push` after the schema stabilizes.

## OpenAI
Set OPENAI_API_KEY only on the server. Never put it in NEXT_PUBLIC_* variables or browser code. Add an AI route/server action when connecting the travel assistant.

## Deployment
Recommended first deployment: Vercel + GitHub + managed PostgreSQL. Vercel automatically detects Next.js projects.

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Add production environment variables in Vercel.
4. Deploy.
5. Add your custom domain in Vercel.
6. Configure DNS at your domain registrar.
7. Submit the generated sitemap to Google Search Console after the domain is live.

## Production integrations to add
- Licensed flight tracking API.
- Flight booking/fare inventory provider.
- Hotel inventory provider.
- Licensed AIS provider for vessels.
- Regional rail/bus feeds.
- Weather and earthquake providers.
- Authentication provider.
- Payment provider.
- Email/SMS/push provider.
- Redis and WebSocket infrastructure.
- PostGIS spatial indexes and viewport-aware transport queries.
- Admin dashboard and RBAC/MFA.
- Observability, rate limiting, backups and security controls.
