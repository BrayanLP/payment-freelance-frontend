import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import devConfig from './config.json';

const prodConfig = {
  apiKey: process.env.REACT_APP_PROD_API_KEY,
  authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
  projectId: process.env.REACT_APP_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PROD_STORAGE_BUCKET,
};
// const devConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
// };
 

const config = process.env.NODE_ENV === 'production'
  ? devConfig
  : devConfig;

if (!firebase.apps.length) {
  // console.log(config)
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const authProvider = firebase.auth;

export {
  db,
  auth,
  authProvider
};