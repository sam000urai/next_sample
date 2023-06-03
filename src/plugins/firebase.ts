import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getApps, initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

const apps = getApps;
let app = undefined;
if (!apps.length) {
    app = initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
export const functions = getFunctions(app, 'asia-northeast1');
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    console.log("test")
    try {
        const result = await signInWithPopup(auth, provider); // Googleログイン用のポップアップを表示
        const user = result.user;
        console.log(user);
        console.log('Google sign in success!!');

        // Firestoreにユーザー情報を保存
        const userRef = doc(db, 'users', user.uid); // usersコレクションの参照を取得
        await setDoc(userRef, {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            // 他に保存したい情報があればここに追加
        });

        return 'success';
    } catch (error) {

        return 'failed';
    }
};