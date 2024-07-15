import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import { config } from "dotenv";
const sql = neon(process.env.DATABASE_URL!);

config({ path: ".env" });
const db = drizzle(sql, { schema });

export default db;
