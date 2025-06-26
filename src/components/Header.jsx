import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

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

  const handleGptSearchClick = () => {
    //Toggle Gpt Search
    dispatch(toggleGptSearchView());
  };

  const handleChangeLanguage = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-4 py-2 bg-gradient-to-b  from-black z-10 w-screen flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="my-5 mr-5 flex ">
          <select
            className="bg-gray-800 mr-5 p-2 rounded-lg font-semibold text-white "
            onChange={handleChangeLanguage}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>

          <button
            className="bg-purple-800 text-white rounded-lg px-4 cursor-pointer mr-6"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img className="w-12 h-12 mr-4" src={user?.photoURL} alt="usericon" />
          <button
            className="bg-red-500 px-4 py-2 text-white font-semibold rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-700"
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
