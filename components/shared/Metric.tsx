import Image from "next/image";
import React from "react";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles?: string;
  href?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  href,
  value,
  title,
  isAuthor,
  textStyles,
}: MetricProps) => {
  return (
    <div className="flex-center flex-wrap gap-1">
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles}flex items-center gap-1 `}>
        {value}
        <span className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : "" }`}>{title}</span>
      </p>
    </div>
  );
};

export default Metric;
