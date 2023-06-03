import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth, provider } from '../plugins/firebase';

export class AuthRepository {
  async googleLogin() {
    return new Promise(async (resolve, reject) => {
      const auth = getAuth();
      await signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          console.log(
            '🚀 ~ file: authRepository.ts:25 ~ AuthRepository ~ returnnewPromise ~ errorCode:',
            errorCode
          );
          const errorMessage = error.message;
          console.log(
            '🚀 ~ file: authRepository.ts:30 ~ AuthRepository ~ returnnewPromise ~ errorMessage:',
            errorMessage
          );
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    });
  }

  async logout() {
    signOut(auth).catch((error) => {
      console.log(error);
    });
  }
}
