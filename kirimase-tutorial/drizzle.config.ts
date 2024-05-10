import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit"
import { env } from "@/lib/env.mjs";

export default {
  schema: "./src/lib/db/schema",
  out: "./src/lib/db/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  }
} satisfies Config;

export default defineConfig({
    dialect: "sqlite", // "postgresql" | "mysql"
    driver: "turso" // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
    dbCredentials: {
        url: url: env.DATABASE_URL,
    }
})