import React from "react";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";

const App = () => {
  return (
    <>
      <SignUp />
      <SignIn />
      <AuthDetails />
    </>
  );
};

export default App;
