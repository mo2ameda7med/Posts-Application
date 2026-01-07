import { useEffect, useMemo, useState } from "react";
import Post from "./Post";
import type { PostsListProps, PostType } from "@/types";
import { Loader2, MoveLeft, MoveRight } from "lucide-react";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

const PostsList = ({ searchTerm, author }: PostsListProps) => {
  // * Variables
  const API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

  // ^ States
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // && Effects
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${API_BASE_URL}?_page=${currentPage}&_limit=10`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data: PostType[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch posts");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase());

      const matchAuthor = author === "all" || post.userId.toString() === author;

      return matchSearch && matchAuthor;
    });
  }, [posts, searchTerm, author]);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center py-10">
          <Loader2 className="size-9 animate-spin text-blue-400" />
        </div>
      ) : (
        <ul>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <p className="text-center py-6 text-muted-foreground">
              No posts found
            </p>
          )}
        </ul>
      )}

      {/* Pagination */}
      {!isLoading && (
        <div className="flex items-center justify-between py-2">
          <Button
            variant="destructive"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <MoveLeft /> Previous
          </Button>

          <Button
            variant="secondary"
            disabled={currentPage === 10}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next <MoveRight />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PostsList;
