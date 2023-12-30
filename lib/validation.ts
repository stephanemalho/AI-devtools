import { z } from "zod";

export const QuestionsSchema = z.object({
  title: z.string() .min(2, { message: "Title must be at least 2 characters." })  
  .max(30, { message: "Title must be at most 30 characters." }),
  explanation : z.string().min(20, { message: "Explanation must be at least 20 characters." }),
  tags :z.array(z.string().min(2, { message: "Tags must be at least 2 characters." }).max(30, { message: "Tags must be at most 30 characters." })).min(1, { message: "Tags must be at least 1 characters." }).max(15, { message: "Tags must be at most 5 characters." }),
});