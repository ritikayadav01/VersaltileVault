import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { RiShieldUserFill } from "react-icons/ri";
import { FaUserShield } from "react-icons/fa";
import { useDispatch,useSelector } from "react-redux";
import { signInFailure,signInStart,signInSuccess } from "../redux/user/userSlice";

export default function SignIn() {
  const Navigate = useNavigate();
  const [formData, setformData] = useState({});
  // const [errorMessage, seterrorMessage] = useState(null);
  // const [loading, setloading] = useState(false);
  const {loading,error:errorMessage}=useSelector(state=>state.user)
const dispatch =useDispatch();
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('All fields are required!!'));
    }
    try {
      dispatch(signInStart());
      // setloading(true);
      // seterrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // return seterrorMessage(data.message);
        dispatch(signInFailure(data.message))
      }
      // setloading(false);
      if (res.ok) {
        dispatch(signInSuccess(data))
        Navigate("/");
      }
    } catch (error) {
      // seterrorMessage(error.message);
      // setloading(false);
      dispatch(signInFailure(error.message))
    }
  };

  return (
    <div className="min-h-screen mt-10">
      <div className="flex p-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 backdrop-blur-sm bg-cyan-100 rounded-2xl">
        {/* left */}
        <div className="flex-1">
          <img
            src="login.png"
            alt="Descriptive text"
            className="w-max h-auto"
          />

          <p className="text-md font-bold mx-auto text-cyan-700">Sign in Securely using Google </p>
        </div>
        {/* right */}
        <div className="flex-1 p-7 rounded-3xl backdrop-blur-lg bg-white/40 ...">
          <FaUserShield className="text-cyan-600 text-center mx-auto h-16 w-16" />
          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            
            <div className="">
              <Label className="text-lg font-bold" value="Your Email" />
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <Label className="text-lg font-bold" value="Your Password" />
              <TextInput
                type="password"
                placeholder="**********"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="greenToBlue"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3"> Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5 font-semibold">
            <span>Dont have an account?</span>
            <Link to="/sign-up" className="text-blue-600 font-bold">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
