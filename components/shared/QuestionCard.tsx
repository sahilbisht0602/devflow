import React from "react";
import RenderTag from "./RenderTag";
import Metric from "./Metric";

interface QuestionCardProps {
  _id: string;
  title: string;
  author: { _id: string; name: string; picture: string };
  tags: { title: string; _id: string }[];
  upvotes: string;
  views: string;
}

const QuestionCard = ({
  _id,
  title,
  author,
  tags,
  upvotes,
  views,
}: QuestionCardProps) => {
  return (
    <div className="card-wrapper rounded-lg p-9">
      <div className="flex flex-col">
        <span className="text-dark400_light700 hidden max-sm:flex">
          202 days
        </span>
        <a href={`/questions/`}>
          <h3 className="text-dark200_light900 base-semibold line-clamp-1">
            {title}
          </h3>
        </a>
        <div className="mt-3.5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <RenderTag key={tag._id} _id={tag._id} name={tag.title} />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 sm:justify-between">
          <Metric
            imageUrl="/assets/icons/avatar.svg"
            alt="like"
            values="Sahil bisht | Carinfo"
            title={"-asked 1 hour ago"}
            textStyles="small-medium text-dark400_light800"
            href={`/profile/${author._id}`}
            isAuthor
          />
          <div className="flex flex-wrap items-center gap-3">
            <Metric
              imageUrl="/assets/icons/like.svg"
              alt="Votes"
              values={upvotes}
              title={"Votes"}
              textStyles="small-medium text-dark400_light800"
            />
            <Metric
              imageUrl="/assets/icons/message.svg"
              alt="Answers"
              values={upvotes}
              title={"Answers"}
              textStyles="small-medium text-dark400_light800"
            />
            <Metric
              imageUrl="/assets/icons/eye.svg"
              alt="Views"
              values={upvotes}
              title={"Views"}
              textStyles="small-medium text-dark400_light800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
