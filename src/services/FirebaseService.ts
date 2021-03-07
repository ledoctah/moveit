import 'firebase/auth';
import firebase from 'firebase/app';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

if (firebase.apps.length) {
  firebase.app();
} else {
  firebase.initializeApp(config);
}

export default firebase;
