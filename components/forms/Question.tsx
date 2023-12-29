"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { QuestionsSchema } from "@/lib/validation";

const Question = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof QuestionsSchema>>({
    resolver: zodResolver(QuestionsSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof QuestionsSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  // 3. Destructure errors from formState
  const { errors } = form.formState;
  const isValid = Object.keys(errors).length === 0;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col gap-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">Question title <span className="text-primary-500">*</span></FormLabel>
              <FormControl>
                <Input className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="...title question" {...field} />
              </FormControl>
              {isValid ? (
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Be specific and imagine you&apos;re asking a question to another person.
                </FormDescription>
              ) : (
                <FormMessage className="text-red-500"/>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light800">Detail explanation of your problem <span className="text-primary-500">*</span></FormLabel>
              <FormControl>
                {/* @todo add an editor component */}
                <textarea className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[256px] border p-2" placeholder="...write here" {...field} />
              </FormControl>
              {isValid ? (
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  introduce the problem an expand on what on what you put in the title. Min 20 characters.
                </FormDescription>
              ) : (
                <FormMessage className="text-red-500"/>
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">Question tags <span className="text-primary-500">*</span></FormLabel>
              <FormControl>
                <Input className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border" placeholder="...tags" {...field} />
              </FormControl>
              {isValid ? (
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to 5 tags to describe what your question is about.
                </FormDescription>
              ) : (
                <FormMessage className="text-red-500"/>
              )}
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Question;
