import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface NotFoundProp {
  title: string;
  subtitle: string;
  ButtonText: string;
}
const Notfound = ({ title, subtitle, ButtonText }: NotFoundProp) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <Image
        src="/assets/images/light-illustration.png"
        width={270}
        height={200}
        alt="not found"
        className="dark:hidden"
      />

      <Image
        src="/assets/images/dark-illustration.png"
        width={270}
        height={200}
        alt="not found"
        className="hidden dark:block"
      />
      <div className="text-dark500_light700 flex flex-col items-center">
        <h2 className=" text-2xl font-bold">{title}</h2>
        <p className="mt-4 max-w-md text-center text-sm">{subtitle}</p>
      </div>
      <Button className=" paragraph-medium mt-5  h-9 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-sm font-medium text-light-900 shadow hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900 dark:hover:bg-primary-500 dark:focus-visible:ring-slate-300">
        Ask A question
      </Button>
    </div>
  );
};

export default Notfound;
