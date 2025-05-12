# DB Schema Package

This package contains shared database schema definitions and initialization scripts for the free-email project. It allows both the dashboard and router workers to use the same database schema without duplicating code.

## Usage

### Initialize local database for development

To initialize the local D1 database for a specific worker:

```bash
# For dashboard worker
npm run init-local -- dashboard

# For router worker
npm run init-local -- router
```

## Schema

The database schema is defined in `schema/schema.sql` and includes tables for:

- Email logs
- Allowed senders
- Other email-related data

## Development

When you need to update the database schema:

1. Modify `schema/schema.sql`
2. Run the init-local script for both workers to apply changes
