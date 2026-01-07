import { useEffect, useState } from "react";
import Post from "./Post";
import type { PostType } from "@/types";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const PostsList = () => {
  // * Variables
  const API_BASE_URL = `https://jsonplaceholder.typicode.com/posts`;

  // ^ States

  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // && Effects
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(API_BASE_URL, {
          method: "GET",
        });
        const data = await response.json();
        console.log({ data });
        setPosts(data);
        toast.success("Posts fetched successfully!");
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to fetch posts.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [API_BASE_URL]);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <Loader2 className="size-9 animate-spin text-muted-foreground" />
        </div>
      ) : (
        <ul>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostsList;
