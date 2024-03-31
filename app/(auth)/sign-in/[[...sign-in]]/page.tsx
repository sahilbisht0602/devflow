import React from "react";
import { SignIn } from "@clerk/nextjs";
const signIn = () => {
  return (
    <div className="flex-center min-h-screen">
      <SignIn />
    </div>
  );
};

export default signIn;
