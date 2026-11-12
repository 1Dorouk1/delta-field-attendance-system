# Security and privacy

## Authentication and access

- Hash passwords with bcrypt; never store plaintext passwords.
- Use secure, HttpOnly, appropriately scoped cookies and CSRF protection.
- Apply rate limits, Helmet, strict input validation, restricted CORS, and secure secret management.
- Check authentication, role, employee ownership, and department scope in backend middleware/services and database queries.
- Scope manager lists, details, map markers, and exports identically. Never rely on UI filtering.
- Record administrative changes and attendance reviews in an append-only audit trail where practical.

## Location and attendance

- Request one location fix only in response to Check-in. Do not use background or continuous geolocation APIs.
- Require HTTPS in production. Validate latitude/longitude bounds and configured accuracy server-side.
- Generate the authoritative timestamp on the server and store UTC. Treat browser capture time as optional metadata.
- Explain that location accuracy can vary and GPS can be spoofed; do not represent a valid fix as guaranteed identity or anti-fraud proof.
- Use idempotency to protect retries without imposing a daily submission limit.

## Data handling

Restrict attendance and employee data to authenticated, authorized users. Define company-approved retention periods for attendance and audit data, backup and restoration procedures, and an administrative correction process that preserves original submissions.

The MVP does not capture, upload, process, store, or serve attendance images. Do not configure image storage credentials, buckets, SDKs, endpoints, or image-specific cloud resources. A future paid image-verification capability requires a separate privacy/security review, explicit authorization, and isolated module before implementation.

## Deployment

Use HTTPS, environment variables, restricted Maps API keys, least-privilege PostgreSQL credentials, database backups, restricted CORS, and production error monitoring. Keep secrets out of source control and document required environment variables in `.env.example`.
