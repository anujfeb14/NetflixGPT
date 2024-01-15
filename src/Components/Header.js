import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });

      //Unsubscribe when component unmounts
      return () => unsubscribe();
    }, []);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
          dispatch(removeUser());
      })
      .catch((error) => {
          navigate("/error");
      });
  };

  return (
    <div className="absolute pl-4 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src= {LOGO}
        alt="logo"
      />
      {user && (<div className="flex content-center p-2">
        <img
          className="h-10 w-10"
          src={user.photoURL}
          alt="usericon"
        />
        <button className="font-bold ml-5" onClick={signOutUser}>
          Sign Out
        </button>
      </div>)}
    </div>
  );
};

export default Header;
