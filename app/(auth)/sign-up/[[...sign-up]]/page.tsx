import { SignUp } from "@clerk/nextjs";

const signUp = () => {
  return (
    <div className="flex-center min-h-screen">
      <SignUp />
    </div>
  );
};

export default signUp;
