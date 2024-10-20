import { FaRegBookmark } from "react-icons/fa";

export const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <div className="border rounded-xl p-2 mb-2">
      <img className="rounded-xl w-full" src={blog.cover} alt="" />
      <div className="flex items-center justify-between">
        {/* Author Details */}
        <div className="flex items-center gap-2 my-2">
          <img className="w-12" src={blog.author_img} alt="" />
          <div>
            <p className="font-bold">{blog.author}</p>
            <p>
              <small className="text-gray-500">{blog.posted_date}</small>
            </p>
          </div>
        </div>

        {/* Bookmark */}
        <div className="flex items-center gap-1">
          <p className="text-gray-500">
            {blog.reading_time > 9
              ? blog.reading_time
              : "0" + blog.reading_time}{" "}
            min read
          </p>
          <FaRegBookmark />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-3xl">{blog.title}</h1>
      </div>
    </div>
  );
};
