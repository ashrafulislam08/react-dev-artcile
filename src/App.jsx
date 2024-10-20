import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markAsRead, setMarkAsRead] = useState(0);
  const handleBookmark = (bookmarkText) => {
    console.log(bookmarkText);
    const newBookmark = [...bookmarks, bookmarkText];
    setBookmarks(newBookmark);
  };

  const handleMarkAsReadTime = (time) => {
    setMarkAsRead(markAsRead + time);
  };
  return (
    <>
      <Header />
      <main className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2 px-5">
        <Blogs
          handleBookmark={handleBookmark}
          handleMarkAsReadTime={handleMarkAsReadTime}
        />
        <Bookmarks bookmarks={bookmarks} markAsRead={markAsRead} />
      </main>
    </>
  );
}

export default App;
