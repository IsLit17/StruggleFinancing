import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

// const auth = getAuth();

export default async function LoginWithEmail(email, password, {navagation}){
  console.log('inside log in with email')
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('successful login')
    navigation.navigate('Home')

  })
  .catch((error) => {
    console.log('error login')

    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return;
}
