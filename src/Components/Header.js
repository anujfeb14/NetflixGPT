import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
          dispatch(removeUser());
          navigate("/");
      })
      .catch((error) => {
          // navigate("/error");
      });
  };

  return (
    <div className="absolute pl-4 w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
