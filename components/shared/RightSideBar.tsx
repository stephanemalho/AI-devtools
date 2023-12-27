import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTags from "./RenderTags";

const RightSideBar = () => {
  const HotQuestions = [
    { _id: "1", title: "How to use Shad cn?", timeStamp: "2 hours ago" },
    { _id: "2", title: "How to use Next.js?", timeStamp: "6 hours ago" },
    { _id: "3", title: "How to use TailwindCSS?", timeStamp: "12 hours ago" },
    { _id: "4", title: "How to use React?", timeStamp: "1 day ago" },
    { _id: "5", title: "How to use Clerck?", timeStamp: "2 days ago" },
  ];

  const PopularTags = [
    { _id: "1", name: "React", totalQuestions: 19 },
    { _id: "2", name: "Next.js", totalQuestions: 20 },
    { _id: "3", name: "TailwindCSS", totalQuestions: 5 },
    { _id: "4", name: "Clerck", totalQuestions: 9 },
    { _id: "5", name: "Shad cn", totalQuestions: 18 },
  ];

  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px] custom-scrollbar">
      <h3 className="h3-bold text-dark200_light900">Top questions:</h3>
      <div className="mt-7 flex flex-col w-full gap-[30px]">
        {HotQuestions.map((question) => (
          <Link
            href={`/questions/${question._id}`}
            key={question._id}
            className="flex cursor-pointer flex-row items-center h-auto"
          >
            <div className="flex items-center flex-col justify-between w-full">
              <span className="text-dark400_light500 text-[10px]">
                {question.timeStamp}
              </span>
              <div className="text-dark500_light700 body-medium">
                {question.title}
              </div>
            </div>
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="chevron-right"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags:</h3>
        <div className="flex mt-7 flex-col gap-4">
          {PopularTags.map((tag) => (
            <RenderTags
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
