import type { PostType } from "@/types";

const Post = ({ post }: { post: PostType }) => {
  return (
    <li>
      <h2 className=" py-1 my-1.5 border-b border-muted-foreground ">
        {post.title}
      </h2>
    </li>
  );
};

export default Post;
