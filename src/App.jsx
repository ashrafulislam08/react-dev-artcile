import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const handleBookmark = (bookmark) => {
    console.log(first);
  };
  return (
    <>
      <Header />
      <main className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2 px-5">
        <Blogs />
        <Bookmarks />
      </main>
    </>
  );
}

export default App;
