import React from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import { db } from "../firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router";
export default function Oauth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      //check for the users
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorized with google");
      console.log(error);
    }
  }
  return (
    <button
      type="button"
      onClick={onGoogleClick}
      className="flex items-center justify-center w-full bg-red-700 text-white text-sm uppercase font-medium px-7 py-3 hover:bg-red-800 transition duration-150 ease-in-out rounded active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg"
    >
      <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
