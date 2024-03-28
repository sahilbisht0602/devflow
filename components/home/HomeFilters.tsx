import React from "react";
import { Button } from "../ui/button";
import { HomePageFilter } from "@/constants/filters";

const HomeFilters = () => {
  const active = "newest";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilter.map((item) => (
        <Button key={item.value} className={`${active===item.value?"bg-primary-100 text-primary-500":"bg-light-800 text-light-500"} rounded-lg px-6 py-3`}>
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
