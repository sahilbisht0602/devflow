import { RightBarContent } from "@/constants";
import Image from "next/image";
import React from "react";

const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 flex h-screen flex-col gap-6 overflow-y-scroll  p-6 pt-36 shadow-md  max-lg:hidden lg:w-[350px]">
      <div>
        <h3 className="h3-bold">{RightBarContent.TOP_QUESTION.heading}</h3>
        <div className="mt-[26px] flex flex-col gap-[30px]">
          {RightBarContent.TOP_QUESTION.content.map((item) => (
            <div key={item.text} className="flex-between flex">
              <p className="max-w-[248px] text-[14px] font-medium leading-[18.2px]">
                {item.text}
              </p>
              <Image
                src={RightBarContent.TOP_QUESTION.ICON}
                width={20}
                height={20}
                alt="right arrow"
                className="invert-colors"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[64px]">
        <h3 className="h3-bold">{RightBarContent.TAGS.heading}</h3>
        <div className="mt-[26px] flex flex-col gap-4">
          {RightBarContent.TAGS.content.map((item) => (
            <div className="flex-between" key={item.title}>
              <div className="bg-[#f4f6f8] px-4 py-2 text-[10px] text-[#858ead] shadow-md">
                {item.title}
              </div>
              <p>{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
