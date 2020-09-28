const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.updateSchedule = functions.pubsub
  .schedule("0 0 0 * * ?") // Every day at 12AM
  .timeZone("America/Los_Angeles") // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
    const scheduleNames = [
      "Weekend",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Weekend",
    ];

    const db = admin.database();
    let today = new Date();
    today = today.getDay(); // sunday - saturday; 0-6

    let newScheduleRef = db.collection("schedules").doc(scheduleNames[today]);
    const periods = await newScheduleRef.get();
    await db.collection("schedules").doc("today").set(periods.data());
});