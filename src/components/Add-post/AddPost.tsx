import { AddNewPostSchema } from "@/schema";
import { Info, Loader2, MoveLeft, NotebookPen } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Link } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";

const AddPost = () => {
  // * Types
  type PostDataType = z.infer<typeof AddNewPostSchema>;

  // ^ Variables
  const API_BASE_URL = `https://jsonplaceholder.typicode.com/posts`;

  // && States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PostDataType>({
    resolver: zodResolver(AddNewPostSchema),
  });

  const onSubmit = (data: PostDataType) => {
    handleCreatePost(data);
  };

  const handleCreatePost = (data: PostDataType) => {
    console.log({ data });
    const createPost = async () => {
      try {
        setIsSubmitting(true);
        const response = await fetch(API_BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log("Post created successfully:", result);
        toast.success("Post created successfully!");
        setIsSubmitting(false);
      } catch (error) {
        setErrorMessage(error?.message);
        toast.error("Failed to create post.");
        setIsSubmitting(false);
      }
    };
    createPost();
  };

  return (
    <div className="bg-gray-100 h-full flex flex-col rounded-lg overflow-hidden">
      {/* Header */}
      <header>
        <p className="flex items-center gap-2 px-4 py-3 bg-white shadow">
          <NotebookPen />
          <span className="font-bold text-lg">Create a New Post</span>
        </p>
      </header>

      {/* Main */}
      <main className="flex-1 w-3/4 bg-white m-4 rounded-md shadow flex">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 p-6 w-full"
        >
          {/* Title */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Title</label>
            <Input
              {...register("title")}
              placeholder="Enter post title"
              className="bg-gray-200 border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <Info className="size-3.5" size={"icon"} />{" "}
                <span>{errors.title.message}</span>
              </p>
            )}
          </div>

          {/* Body */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Body</label>
            <Textarea
              {...register("body")}
              placeholder="Enter post body"
              className="bg-gray-200 border p-2 w-full rounded-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.body && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <Info className="size-3.5" size={"icon"} />{" "}
                <span>{errors.body.message}</span>
              </p>
            )}
          </div>

          {/* Author */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1">Author</label>
            <Select
              value={watch("author") || "all"}
              onValueChange={(val) => setValue("author", val)}
            >
              <SelectTrigger className="w-full bg-gray-200 shadow-0 border-0 outline-0">
                <SelectValue placeholder="Author" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Authors</SelectLabel>
                  <SelectItem value="mohamed">Mohamed</SelectItem>
                  <SelectItem value="ahmed">Ahmed</SelectItem>
                  <SelectItem value="saieed">Saieed</SelectItem>
                  <SelectItem value="reem">Reem</SelectItem>
                  <SelectItem value="nadeen">Nadeen</SelectItem>
                  <SelectItem value="all">All</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {errors.author && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <Info className="size-3.5" size={"icon"} />{" "}
                <span>{errors.author.message}</span>
              </p>
            )}
          </div>

          {errorMessage && (
            <div className="bg-red-300 py-2 rounded-lg text-red-700 flex items-center justify-center gap-1 ">
              <Info className="size-5" /> <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-between mt-4">
            <Link to={"/"}>
              <Button
                variant={"destructive"}
                className="px-6 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
              >
                <MoveLeft /> <span>Back</span>
              </Button>
            </Link>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded-lg cursor-pointer"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Create Post"
              )}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddPost;
