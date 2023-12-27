"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface LocalSearchbarProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchbarProps) => {
  return (
    <div className="relative w-full">
      <div
        className={`background-light800_darkgradient flex grow items-center min-h-[56px] rounded-[10px] gap-4 px-4 ${otherClasses}`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            width={16}
            height={16}
            alt="search"
            className="cursor-pointer"
          />
        )}
        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className="paragraph-regular placeholder no-focus shadow-none outline-none border-none text-dark400_light700 background-light850_dark100"
        />
        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            width={16}
            height={16}
            alt="search"
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearchbar;
