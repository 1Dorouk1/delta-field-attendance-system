# DELTA Employee Field Attendance System

Responsive bilingual field attendance application for DELTA – Public Accountants & Consultants.

The approved DELTA logo is stored at `frontend/assets/images/delta-logo.png`. Use this original asset in the interface without modifying it.

## MVP scope

Employees submit independent GPS-based Check-ins. The browser requests a one-time location after the employee presses Check-in; the employee reviews the location and confirms; the Express backend generates the authoritative timestamp and stores the record in PostgreSQL through Prisma.

The MVP has no camera access, MediaDevices usage, selfie capture, image preview, image upload, image verification, attendance photo table, or cloud image storage. No image service, image SDK, or image-related cloud cost is required. The modular design leaves room for a separately scoped future paid verification module without coupling it to the core attendance flow.

Core rules include unlimited Check-ins per day, no required Check-out, no live or background tracking, department-scoped manager permissions, Arabic/English with RTL/LTR, and responsive mobile/desktop access.

## Technology

- Node.js and Express.js
- PostgreSQL and Prisma ORM
- Browser Geolocation API
- Google Maps for historical attendance locations
- Vanilla JavaScript ES modules, HTML, CSS

## Repository layout

See [docs/requirements.md](docs/requirements.md#12-project-layout) for the full modular structure. Database design and Prisma schema are in [docs/database.md](docs/database.md) and [backend/prisma/schema.prisma](backend/prisma/schema.prisma). REST contracts are in [docs/api.md](docs/api.md); privacy and security requirements are in [docs/security.md](docs/security.md).

## Current status

This workspace contains the updated specifications, initial Prisma schema, and a static interactive demo. The demo roles use Amr (system administrator), Belal (department manager), and Mahmoud (employee). Mahmoud can simulate a one-time GPS check-in in the browser; the resulting record appears to Belal and Amr for that browser session.

The demo is not a production application. It has no backend/API, authentication, PostgreSQL connection, Google Maps connection, persistent attendance storage, or server-generated timestamp. The visible role switcher is for presentation only; it does not enforce permissions. The simulated check-in resets when the page is refreshed. Read [docs/demo-guide.md](docs/demo-guide.md) before presenting it.

## Run the demo

From the project root:

```sh
python -m http.server --bind 127.0.0.1 8000 --directory frontend
```

Open `http://127.0.0.1:8000`. Browser GPS permission works on localhost; the user must grant location access when the Check-in flow requests it.

## Next implementation steps

1. Connect the Vercel project to its Git repository and provision PostgreSQL.
2. Implement the Express API, authentication, server authorization, Prisma migrations, and audit log.
3. Replace sample content with authorized API data and server-generated attendance timestamps.
4. Configure a restricted Google Maps key and render historical locations.

Do not add image storage credentials, packages, buckets, or services to the MVP environment.

## Documentation

- [Updated master requirements](docs/requirements.md)
- [Database design](docs/database.md)
- [REST API](docs/api.md)
- [Security and privacy](docs/security.md)
- [Interactive demo guide](docs/demo-guide.md)
