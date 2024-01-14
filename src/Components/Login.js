import Header from "./Header";
import {useState} from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(prevState => !prevState);
    }

    return (
        <div>
        <Header />
        <div className="absolute">
            <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="background"
            />
        </div>
        <form className="absolute w-3/12 p-12 bg-black mx-auto left-0 right-0 top-1/4 text-white bg-opacity-90">
            <h1 className="font-bold text-3xl pb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="my-2 p-2 w-full bg-gray-800"
            />}
            <input
            type="text"
            placeholder="Email Address"
            className="my-2 p-2 w-full bg-gray-800"
            />
            <input
            type="password"
            placeholder="Password"
            className="my-2 p-2 w-full bg-gray-800"
            />
            <button className="bg-red-700 p-2 mt-5 text-lg w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up" : "Already registered? Sign In Now"}</p>
        </form>
        </div>
    );
};

export default Login;
