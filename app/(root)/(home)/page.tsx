import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import Filter from "@/components/shared/Filter";
import { HomePageFilter } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import QuestionCard from "@/components/shared/QuestionCard";
import Notfound from "@/components/shared/Notfound";
import { getQuestions } from "@/lib/actions/question.action";

const Home = async () => {
  const result = await getQuestions();
  return (
    <>
      <div className="text-dark100_light900 flex justify-between gap-4 max-sm:flex-col-reverse">
        <h1 className="h1-bold">All Questions</h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] py-3 font-medium text-white">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex items-center justify-between gap-5  max-sm:flex-col">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions..."
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilter}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex max-sm:w-full"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex flex-col gap-6">
        {result?.questions && result.questions.length > 0 ? (
          result?.questions.map((item: any) => (
            <QuestionCard
              key={item._id}
              _id={item._id}
              title={item.title}
              tags={item.tags}
              author={item.author}
              upvotes={item.upvotes}
              views={item.views}
            />
          ))
        ) : (
          <Notfound
            title={"There are no question to show"}
            subtitle={
              "Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            }
            ButtonText={"Ask a Question"}
          />
        )}
      </div>
    </>
  );
};

export default Home;
