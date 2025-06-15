import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //Unsubscribe when component UnMount  || CleanUp on unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b  from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="my-5 mr-5 flex">
          <img className="w-12 h-12 mr-4" src={user?.photoURL} alt="usericon" />
          <button
            className="bg-red-500 px-4 py-2 text-white font-semibold rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-700"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
