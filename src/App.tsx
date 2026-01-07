import { Route, Routes } from "react-router";
import Header from "./components/Header/Header.js";
import HomePage from "./components/Home-page/HomePage.js";
import AddPost from "./components/Add-post/AddPost.js";
import PostDetails from "./components/Post-details/PostDetails.js";
function App() {
  return (
    <div className=" bg-[url('/assets/bg.jpg')] bg-cover min-h-screen mx-auto p-4 bg-red-100">
      <div className="container mx-auto  flex flex-col gap-6">
        <Header />
        {/* <HomePage /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
