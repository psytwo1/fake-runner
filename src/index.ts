// const USER_ID = "user is here";
import { USER_ID } from "./user_id";

// const UDID = "device UDID here";
import { UDID } from "./udid";

import { exec } from "child_process";

import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = require("../sa-key.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

const doc = db.collection("locations").doc(USER_ID);

const observer = doc.onSnapshot(
  (docSnapshot: any) => {
    // console.log(`Received doc snapshot: ${docSnapshot}`);
    const data = docSnapshot.data();
    // console.log(`docSpaishot data is ${data}`);
    const latitude = data.coordinate.latitude;
    const longitude = data.coordinate.longitude;
    // console.log(`latitude is ${latitude} longitude is ${longitude}`);
    const cmdline = `idevicelocation -u ${UDID} -- ${latitude} ${longitude}`;
    console.log(cmdline);
    exec(cmdline, (err: any, stdout: any, stderr: any) => {
      if (stdout !== null) {
        console.log(`${stdout}`);
      }
      if (stderr !== null) {
        console.log(`${stderr}`);
      }
      if (err !== null) {
        console.log(`${err}`);
        return;
      }
    });
  },
  (err: any) => {
    console.log(`${err}`);
  }
);
