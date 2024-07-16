import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding DB");

    await db.delete(schema.Courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.Courses).values([
      {
        title: "English",
        imageSrc: "/ENG.svg",
      },
      {
        title: "Kenian",
        imageSrc: "/KE.svg",
      },
      {
        title: "Italian",
        imageSrc: "/IT.svg",
      },
      {
        title: "Japanese",
        imageSrc: "/JP.svg",
      },
      {
        title: "Cameroon",
        imageSrc: "/cm.svg",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed Database");
  }
};
main();
