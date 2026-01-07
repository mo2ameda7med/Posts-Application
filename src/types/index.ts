// && Post Type Definition
export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// && Props for PostsList Component
export type PostsListProps = {
  searchTerm: string;
  author: string;
};
