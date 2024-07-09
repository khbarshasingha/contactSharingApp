// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDzMSN4FNup0BD6MpdW9W8z76hPty74Z8",
  authDomain: "next-fire-starter.firebaseapp.com",
  projectId: "next-fire-starter",
  storageBucket: "next-fire-starter.appspot.com",
  messagingSenderId: "621917408223",
  appId: "1:621917408223:web:b0aa0af00de6a42e82926a"
};

// Initialize Firebase
const app =getApps().length === 0? initializeApp(firebaseConfig):getApps()[0];

const db= getFirestore(app);

export {db}
export default app;

// export const serverConfig = {
//   cookieName: process.env.AUTH_COOKIE_NAME!,
//   cookieSignatureKeys: [process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT!, process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!],
//   cookieSerializeOptions: {
//     path: "/",
//     httpOnly: true,
//     secure: process.env.USE_SECURE_COOKIES === "true",
//     sameSite: "lax" as const,
//     maxAge: 12 * 60 * 60 * 24,
//   },
//   serviceAccount: {
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
//     clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL!,
//     privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n")!,
//   }
// };

// export const clientConfig = {
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
// };