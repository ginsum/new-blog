import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from ".";

export const login = async (email: string, password: string) => {
  try {
    const auth = getAuth(app);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user.uid;
  } catch (e) {
    console.error(e);
  }
};
