import Filter from "@/components/shared/Filter";
import UserProfileCard from "@/components/shared/UserProfileCard";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { CommunityFilter } from "@/constants/filters";
import { getAllUser } from "@/lib/actions/user.actions";
import React from "react";

const Community = async () => {
  const user = await getAllUser();
  return (
    <section>
      <h1 className="h1-bold">All Users</h1>
      <div className="mt-11  flex gap-5 max-sm:flex-col">
        <LocalSearchBar
          iconPosition="left"
          placeholder="Search amazing minds here..."
        />
        <Filter filters={CommunityFilter} otherClasses="min-h-[56px]" />
      </div>
      <div className="mt-12 flex flex-wrap gap-4 max-md:flex-col">
        {user?.map((user) => (
          <UserProfileCard
            key={user.clerkId}
            path={user.clerkId}
            name={user.name}
            username={user.username}
            email={user.email}
            picture={user.picture}
          />
        ))}
      </div>
    </section>
  );
};

export default Community;
