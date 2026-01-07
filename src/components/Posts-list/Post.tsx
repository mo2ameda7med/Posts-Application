import type { PostType } from "@/types";
import { Link } from "react-router";

const Post = ({ post }: { post: PostType }) => {
  return (
    <li>
      <Link to={`/posts/${post?.id}`}>
        <h2 className=" py-1 my-1.5 border-b border-muted-foreground/20 ">
          {post.title}
        </h2>
      </Link>
    </li>
  );
};

export default Post;
