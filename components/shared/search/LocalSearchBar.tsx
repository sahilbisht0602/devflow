"use client";
import Image from "next/image";
import React from "react";
import { Input } from "../../ui/input";

interface CustomSearchProp {
  route?: string;
  iconPosition: string;
  imgSrc?: string;
  placeholder: string;
  otherClasses?: string;
}
const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomSearchProp) => {
  return (
    <div className=" flex min-h-[56px] grow items-center gap-4 rounded-lg bg-[#f4f6f8] px-4 max-sm:w-full">
      {iconPosition === "left" && (
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
      )}

      <Input
        placeholder={placeholder}
        type="text"
        value=""
        onChange={() => {}}
      />
      {iconPosition === "right" && (
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
