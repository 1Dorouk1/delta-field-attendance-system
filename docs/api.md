# REST API

Base path: `/api`. JSON requests/responses unless noted. All endpoints require authentication except login and password-reset initiation/completion. Enforce role and department scope on the server, including object-level checks. Use pagination and server-side filters for collection endpoints.

## Authentication

- `POST /auth/login`
- `POST /auth/logout`
- `GET /auth/me`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`

## Employees and departments

- `GET /employees`
- `POST /employees`
- `GET /employees/:id`
- `PATCH /employees/:id`
- `PATCH /employees/:id/status`
- `GET /departments`
- `POST /departments` (authorized administrators)
- `PATCH /departments/:id` (authorized administrators)

## Attendance

- `POST /attendance/check-in` — employee submits `latitude`, `longitude`, `accuracyMeters`, optional `locationCapturedAt`, optional `address`, and required `idempotencyKey`. Server validates coordinates/accuracy, derives employee identity from the session, takes department snapshot, creates the authoritative timestamp, and persists one row. Client-supplied attendance/server timestamps and employee IDs are ignored/rejected. Return the committed record and server timestamp.
- `GET /attendance/my-history` — current employee's own paginated history.
- `GET /attendance/:id` — owner or authorized administrator/manager only.
- `GET /attendance` — authorized, paginated and filtered administrative view.
- `PATCH /attendance/:id/review` — authorized review action; audit changes.

## Historical map and reports

- `GET /map/attendance-locations` — historical locations, filtered and scoped by backend authorization.
- `GET /reports/daily`
- `GET /reports/weekly`
- `GET /reports/monthly`
- `GET /reports/employee/:id`
- `GET /reports/department/:id`
- `GET /reports/export?format=csv|xlsx|pdf`

Managers receive only rows for assigned departments, regardless of requested department IDs. Employees receive only their own data. Exports use the same authorization filters as list endpoints.

## Contract rules

- No mandatory Check-out endpoint.
- No camera, selfie, image upload/download, image review, or storage API exists in this MVP.
- Never trust client timestamps or client-supplied identity/department scope.
- Idempotency key is unique per employee; retrying the same submission returns the original result rather than inserting another row.
- Return validation errors for out-of-range coordinates or accuracy over the configured threshold. Return localized user-facing messages through the frontend translation layer.
- Successful response is sent only after PostgreSQL commit.
