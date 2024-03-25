"use client";
import React from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SideBarContent = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-6 max-sm:hidden">
      {sidebarLinks.map((item) => {
        const isActive = pathname === item.route;
        return (
          <Link
            href={item.route}
            key={item.label}
            className={`${isActive ? "primary-gradient text-light-900 rounded-lg" : "text-dark300_light900"} flex items-center justify-start gap-4 p-4`}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p
              className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
            >
              {item.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
const LeftSideBar = () => {
  return (
    <section className="flex-between background-light900_dark200 custom-scrollbar sticky flex flex-col h-screen light-border overflow-y-auto p-6 pt-36 shadow-md max-sm:hidden lg:w-[266px]">
      <SideBarContent />
      <SignedOut>
        <div className="flex w-full flex-col gap-3 ">
          <Link href="/sign-in" className="">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                width={20}
                height={20}
                className="invert-colors hidden max-lg:block"
                alt="sign-up"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                width={20}
                height={20}
                className="invert-colors hidden max-lg:block"
                alt="sign-up"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign Up
              </span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
