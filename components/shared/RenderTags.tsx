import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface RenderTagsProps {
  _id: number;
  name: string;
  totalQuestions: number;
  showCount?: boolean;
}

const RenderTags = ({
  _id,
  name,
  totalQuestions,
  showCount,
}: RenderTagsProps) => {
  return <Link href={`/tags/${_id}`} className="flex justify-between gap-2"><Badge className="subtle-medium background-light800_dark300 text-dark500_light700 rounded-md border-none px-4 py-2 uppercase">{name}</Badge>{showCount && (<p className="small-medium text-dark500_light700">{totalQuestions}</p>)}</Link>;
};

export default RenderTags;
