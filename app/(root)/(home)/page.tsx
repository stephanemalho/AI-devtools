import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "What is the best way to learn React?",
    tags: [
      {
        _id: "tag1",
        name: "react",
      },
      {
        _id: "tag2",
        name: "javascript",
      },
      {
        _id: "tag3",
        name: "frontend",
      },
    ],
    author: {
      _id: "author1",
      name: "Kohn Doe",
      picture: "url_de_l'image",
    },
    upvotes: 134536,
    views: 2034567,
    answers: [],
    createdAt: new Date("2021-09-10T11:00:00.000Z"),
  },
  {
    _id: "2",
    title: "Can I use Next.js with Typescript?",
    tags: [
      {
        _id: "tag4",
        name: "Nextjs",
      },
      {
        _id: "tag5",
        name: "typescript",
      },
      {
        _id: "tag6",
        name: "frontend",
      },
    ],
    author: {
      _id: "author2",
      name: "John Doe",
      picture: "url_de_l'image",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2019-09-10T11:00:00.000Z"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">Ask Question</h1>
        <Link href="/ask-question/" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        /> 
        
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? questions.map((question) => (
          <QuestionCard
            key={question._id}
            _id={question._id}
            title={question.title}
            tags={question.tags}
            author={question.author}
            upvotes={question.upvotes}
            views={question.views}
            answers={question.answers}
            createdAt={question.createdAt}

          />
          )) : 
          <NoResult
            title={`There's no question to show`}
            content={`Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡`}
            link="/"
            linkLabel="Ask a question"
          />
        }
      </div>
    </>
  );
};

export default Home;
