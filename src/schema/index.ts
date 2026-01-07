import { z } from "zod";

export const AddNewPostSchema = z.object({
  title: z
    .string({ message: "Post Title Required" })
    .min(1, { message: "Post Title Required" })
    .max(100, { message: "Title is too long" }),
  body: z
    .string({ message: "Body of the post required" })
    .min(1, { message: "Body is required" })
    .max(5000, { message: "Body is too long" }),
  author: z.string({ message: "Author is required" }),
});
