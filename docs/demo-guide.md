# DELTA interactive demo

## What this demo shows

The static prototype is for product review. Its sample roles use the requested names. Use the role switcher on the administrator dashboard to preview:

- **عمرو (Amr), system administrator:** organization-wide attendance summaries, employees, departments, reports, historical-location preview, and settings.
- **بلال (Belal), department manager:** the Audit department and its attendance records.
- **محمود (Mahmoud), employee:** personal history and the one-time GPS Check-in flow.

Arabic is the default. Use the language control to switch between Arabic RTL and English LTR. Navigation, attendance filters, record detail dialogs, report CSV download, and the Check-in simulation are interactive.

## Run locally

From the project root, start a local-only static server:

```sh
python -m http.server --bind 127.0.0.1 8000 --directory frontend
```

Open `http://127.0.0.1:8000` in a browser. The Check-in demo requests a one-time location after the user presses the location button. Location permission must be allowed by the browser. No continuous or background location is used.

## Demo boundaries

- The people, departments, attendance records, counts, and map markers are sample content defined in `frontend/js/data.js`; they are not DELTA employee or production records.
- Switching roles previews screens. It is not login or server authorization. Actual access control must be implemented by the backend and enforced in database queries.
- Mahmoud can complete a GPS-based Check-in simulation. After confirmation it immediately appears in the attendance list for Belal and Amr for the current browser session. It uses a local browser timestamp and in-memory state, not a server timestamp or database write; refreshing the page resets it.
- The map illustration is not Google Maps and does not transmit coordinates to Google. Google Maps is not configured in this workspace.
- The demo has no API connection, database connection, authentication, audit log, or persisted changes. Do not use it to register real attendance or enter employee information.
- There is no camera, selfie, image upload, or attendance-image storage feature.
