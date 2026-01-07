import type { PostType } from "@/types";
import { Calendar, Loader2, MoveLeft, User } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router";
import { Button } from "../ui/button";

const PostDetails = () => {
  // * Variables
  const { postId } = useParams();
  const API_BASE_URL = `https://jsonplaceholder.typicode.com/posts`;

  //   ~ States
  const [post, setPost] = useState<PostType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  //   ^ Effects
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}/${postId}`, {
          method: "GET",
        });
        const data = await response.json();
        console.log({ data });
        setPost(data);
        // toast.success("Posts fetched successfully!");
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to fetch posts.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [API_BASE_URL, postId]);

  console.log({ postId });
  return (
    <div
      className="bg-gray-100/80
    0 h-[calc(100vh-120px)] rounded-md overflow-hidden"
    >
      {isLoading ? (
        <div className="flex items-center justify-center py-10 h-full">
          <Loader2 className="size-9 animate-spin text-blue-400" />
        </div>
      ) : (
        <>
          <div className="h-1/2 bg-[#21609aa7] flex flex-col justify-end px-7 py-4 gap-3 text-white ">
            <Button className="bg-gray-200 hover:bg-gray-300/90 w-35 text-black">
              <Link to="/" className="flex items-center gap-2">
                {" "}
                <MoveLeft /> Back to Posts{" "}
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
            <div className="flex gap-10">
              <p className="flex items-center gap-4 ">
                {" "}
                <User className="text-gray-500" />{" "}
                <p className="text-[16px]">Leanne Graham</p>
              </p>
              <p className="flex items-center gap-4">
                <Calendar className="text-gray-500 " />{" "}
                <span className="text-[16px]">September 14, 2023</span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-100 md:px-7">
            <p className="">{post?.body}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PostDetails;
