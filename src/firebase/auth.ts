import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const login = async (email: string, password: string) => {
  try {
    const auth = getAuth();
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
