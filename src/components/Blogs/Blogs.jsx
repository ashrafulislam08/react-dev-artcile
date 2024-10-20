import { useEffect } from "react";
import { useState } from "react";
import { Blog } from "../Blog/Blog";

const Blogs = ({ handleBookmark, handleMarkAsReadTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`blogs.json`)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="col-span-3">
      {blogs.map((blog, idx) => (
        <Blog
          key={idx}
          handleMarkAsReadTime={handleMarkAsReadTime}
          handleBookmark={handleBookmark}
          blog={blog}
        />
      ))}
    </div>
  );
};

export default Blogs;
