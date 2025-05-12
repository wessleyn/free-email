import { sql } from 'drizzle-orm';
import { drizzle as drizzleD1 } from 'drizzle-orm/d1';

// Export schema
import * as schema from './schema';
export * from './schema';

// Export DrizzleD1Database type with schema
export type DrizzleD1Database = ReturnType<typeof createDb>;

// Create a properly typed database instance function
export function createDb(d1: D1Database) {
    return drizzleD1(d1, { schema });
}

// Export all needed drizzle functions and constants
export { drizzleD1 as drizzle, sql };

    
// Export the schema as a single object for convenience
export const db = { schema };

