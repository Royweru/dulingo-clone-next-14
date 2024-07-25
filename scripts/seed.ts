import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding DB");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "English",
        imageSrc: "/ENG.svg",
      },
      {
        id: 2,
        title: "Kenian",
        imageSrc: "/KE.svg",
      },
      {
        id: 3,
        title: "Italian",
        imageSrc: "/IT.svg",
      },
      {
        id: 4,
        title: "Japanese",
        imageSrc: "/JP.svg",
      },
      {
        id: 5,
        title: "Cameroon",
        imageSrc: "/cm.svg",
      },
    ]);

    await db.insert(schema.units).values([
      {
        id: 1,
        courseId: 1,
        title: "First Unit",
        description: "learn Englichh ",
        order: 1,
      },
    ]);

    await db.insert(schema.lessons).values([
      {
        id: 1,
        unitId: 1,
        order: 1,
        title: "Nouns",
      },
      {
        id: 2,
        unitId: 1,
        order: 2,
        title: "Verbs",
      },
      {
        id: 3,
        unitId: 1,
        order: 3,
        title: "prural",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 1,
        lessonId: 1,
        type: "SELECT",
        question: "which one is 'the man?' ",
        order: 1,
      },
      {
        id: 2,
        lessonId: 1,
        type: "ASSIST",
        question: "the man ",
        order: 2,
      },
      {
        id: 3,
        lessonId: 1,
        type: "SELECT",
        question: "which one is 'the robot?' ",
        order: 3,
      },
    ]);

    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 1,
        imageSrc: "/man.png",
        correct: true,
        text: "the man",
        audioSrc: "/es_man.wav",
      },
      {
        challengeId: 1,
        imageSrc: "/woman.png",
        correct: false,
        text: "the woman",
        audioSrc: "/es_woman.wav",
      },
      {
        challengeId: 1,
        imageSrc: "/robot.png",
        correct: false,
        text: "the robot",
        audioSrc: "/es_robot.wav",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 2,
        correct: true,
        text: "the man",
        audioSrc: "/es_man.wav",
      },
      {
        challengeId: 2,
        correct: false,
        text: "the woman",
        audioSrc: "/es_woman.wav",
      },
      {
        challengeId: 2,
        correct: false,
        text: "the robot",
        audioSrc: "/es_robot.wav",
      },
    ]);
    await db.insert(schema.challengeOptions).values([
      {
        challengeId: 3,
        imageSrc: "/man.png",
        correct: false,
        text: "the man",
        audioSrc: "/es_man.wav",
      },
      {
        challengeId: 3,
        imageSrc: "/woman.png",
        correct: false,
        text: "the woman",
        audioSrc: "/es_woman.wav",
      },
      {
        challengeId: 3,
        imageSrc: "/robot.png",
        correct: true,
        text: "the robot",
        audioSrc: "/es_robot.wav",
      },
    ]);

    await db.insert(schema.challenges).values([
      {
        id: 4,
        lessonId: 2,
        type: "SELECT",
        question: "which one is 'the man?' ",
        order: 4,
      },
      {
        id: 5,
        lessonId: 2,
        type: "ASSIST",
        question: "the man ",
        order: 5,
      },
      {
        id: 6,
        lessonId: 2,
        type: "SELECT",
        question: "which one is 'the robot?' ",
        order: 6,
      },
    ]);
    console.log("Seeding finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed Database");
  }
};
main();
