import { name } from "assert";
import Image from "next/image";
import React from "react";

interface UserProfileCardProps {
  path: string;
  name: string;
  username: string;
  email: string;
  picture: string;
}
const UserProfileCard = ({
  path,
  name,
  username,
  email,
  picture,
}: UserProfileCardProps) => {
  return (
    <section className="flex flex-1 items-center justify-center rounded-xl bg-white p-8  shadow-lg md:w-[260px]">
      <div className="flex flex-col gap-2">
        <Image
          src={picture}
          alt="user profile"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex flex-col items-center gap-2">
          <h2 className="h3-bold text-dark200_light900 line-clamp-1">{name}</h2>
          <h4>@{username}</h4>
        </div>
      </div>
    </section>
  );
};

export default UserProfileCard;
