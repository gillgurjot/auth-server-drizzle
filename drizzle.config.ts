import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./schemas",
  out: "../drizzle/migrations",
  driver: "turso", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
  verbose: true,
} satisfies Config;
