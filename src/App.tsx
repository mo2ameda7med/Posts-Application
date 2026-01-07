import Header from "./components/Header/Header.js";
import HomePage from "./components/Home-page/HomePage.js";
function App() {
  return (
    <div className=" bg-[url('/assets/bg.jpg')] bg-cover min-h-screen mx-auto p-4 bg-red-100">
      <div className="container mx-auto  flex flex-col gap-6">
        <Header />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
