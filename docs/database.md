# Database design

## PostgreSQL and Prisma

PostgreSQL is the system of record. Prisma defines models and migrations. Store timestamps as UTC (`timestamptz`/Prisma `DateTime` with PostgreSQL `Timestamptz`); render them in `Africa/Cairo`. The schema contains no attendance image/photo table, image reference, or image field.

## Core entities

- `User`: login identity, password hash, role, language preference, account status.
- `Employee`: employee number, profile fields, department relation, optional manager scope relations.
- `Department`: organization unit.
- `ManagerDepartment`: explicit manager-to-department authorization.
- `Attendance`: one independently submitted Check-in with employee and department snapshot, server timestamp, GPS location/accuracy, optional address/acquisition time, status, and idempotency key.
- `AuditLog`: actor, action, target, timestamp, and structured change metadata.
- `PasswordReset`: hashed/expiring reset token data.
- `SystemSetting`: configurable defaults such as language and GPS accuracy limit.

## Prisma schema

The executable schema is [../backend/prisma/schema.prisma](../backend/prisma/schema.prisma). Important behavior:

- There is no one-record-per-day unique constraint; repeated Check-ins are allowed.
- `(employeeId, idempotencyKey)` is unique to suppress retry duplicates.
- `departmentIdSnapshot` preserves the employee's department at submission time.
- Location coordinates are numeric columns; map queries use indexes and can later adopt PostGIS if spatial query needs justify it.
- No `checkOut`, `selfie`, `photo`, file reference, or image metadata field exists.

Apply schema changes through reviewed Prisma migrations. Do not edit production data with ad hoc schema changes.
