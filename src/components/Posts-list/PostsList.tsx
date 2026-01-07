import { useEffect, useState } from "react";
import Post from "./Post";
import type { PostType } from "@/types";
import { Loader2, MoveLeft, MoveRight } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

const PostsList = () => {
  // * Variables
  const API_BASE_URL = `https://jsonplaceholder.typicode.com/posts`;

  // ^ States

  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // && Effects
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}?_page=${currentPage}`, {
          method: "GET",
        });
        const data = await response.json();
        console.log({ data });
        setPosts(data);
        // toast.success("Posts fetched successfully!");
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to fetch posts.");
      } finally {
        setIsLoading(false);
      }
    };
    console.log({ currentPage });
    fetchPosts();
  }, [API_BASE_URL, currentPage]);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <Loader2 className="size-9 animate-spin text-blue-400" />
        </div>
      ) : (
        <ul>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      )}

      {/* Pagination */}
      {!isLoading && (
        <div className="flex items-center justify-between py-2 ">
          <Button
            variant={"destructive"}
            className="cursor-pointer"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            {" "}
            <MoveLeft /> Previous
          </Button>
          <Button
            variant={"secondary"}
            className="cursor-pointer"
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === 10}
          >
            Next <MoveRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostsList;
