import * as functions from "firebase-functions";
import admin = require("firebase-admin");

admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.updateSchedule = functions.pubsub
  .schedule("0 0 * * *") // Every day at 12AM
  .timeZone("America/Los_Angeles") // Users can choose timezone - default is America/Los_Angeles
  .onRun(async (context) => {
    const scheduleNames = [
      "Weekend",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Weekend",
    ];

    const db = admin.firestore();
    const today = new Date().getDay(); // sunday - saturday; 0-6

    functions.logger.info("Today: " + today + " : " + scheduleNames[today]);
    functions.logger.info(new Date());

    const newScheduleRef = db.collection("schedules").doc(scheduleNames[today]);
    const periods = await newScheduleRef.get();

    await db.collection("schedules").doc("today").set(periods?.data()!);
  });
