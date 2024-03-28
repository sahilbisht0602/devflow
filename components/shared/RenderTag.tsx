import Link from "next/link";
import React from "react";
interface RenderTagProps {
  _id: string;
  name: string;
  showCount?: boolean;
  count?: string;
}
const RenderTag = ({ _id, name, showCount, count }: RenderTagProps) => {
  return (
    <Link href={`/tagsa/${_id}`}>
      <div className="flex-between">
        <div className="background-light800_dark300 text-light400_light500 bg-[#f4f6f8] px-4 py-2 text-[10px] text-[#858ead] shadow-md">
          {name}
        </div>
        {showCount && <p className="small-medium">{count}</p>}
      </div>
    </Link>
  );
};

export default RenderTag;
