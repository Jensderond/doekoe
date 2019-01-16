// Initialize Firebase
import firebase from 'firebase/app';

firebase.initializeApp({
  projectId: 'YOUR_ID',
  databaseURL: 'YOUR_DATABASE_URL',
});
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});

export default db;
