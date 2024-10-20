import { useEffect } from "react";
import { useState } from "react";
import { Blog } from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`blogs.json`)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="col-span-3">
      {blogs.map((blog) => (
        <Blog blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
