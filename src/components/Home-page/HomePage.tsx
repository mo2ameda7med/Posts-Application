import { Plus, ScrollText } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import PostsList from "../Posts-list/PostsList";

const HomePage = () => {
  return (
    <div className="bg-gray-300/60 rounded-xl ">
      <header className="flex items-center justify-between bg-white py-2 rounded-t-xl px-4">
        <p className="flex items-center gap-2 ">
          <span>
            <ScrollText />
          </span>
          <span className="font-bold">Post List</span>
        </p>
        <Button className="flex items-center gap-2 cursor-pointer bg-transparent text-muted-foreground font-medium hover:bg-gray-100">
          <Plus /> Create a new Post
        </Button>
      </header>
      <main className="">
        <section className="flex items-center justify-center gap-4 shadow-0 border-0 outline-0 bg-gray-300/70 py-4 px-4">
          <Input
            type="search"
            placeholder="Search for a post"
            className="bg-white"
          />
          <div className="flex items-center gap-4">
            <h4>Author</h4>
            <Select defaultValue="all">
              <SelectTrigger className="w-45 bg-white shadow-0 border-0 outline-0">
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
          </div>
        </section>
        <section className=" py-4 px-4 bg-gray-300">
          <PostsList />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
