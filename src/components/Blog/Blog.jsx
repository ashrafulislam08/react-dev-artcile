import { FaRegBookmark } from "react-icons/fa";

export const Blog = ({ blog, handleBookmark, handleMarkAsReadTime }) => {
  return (
    <div className="border rounded-xl p-5 mb-2">
      <img className="rounded-xl w-full mb-3" src={blog.cover} alt="" />
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
          <FaRegBookmark
            className="font-bold text-lg"
            onClick={() => handleBookmark(blog.title)}
          />
        </div>
      </div>
      <div className="my-3">
        <h1 className="font-semibold text-3xl mb-3">{blog.title}</h1>
        {blog.hashtags.map((tag, idx) => (
          <p key={idx} className="font-semibold text-gray-500 inline m-2">
            #{tag}
          </p>
        ))}
        <p
          onClick={() => handleMarkAsReadTime(blog.reading_time)}
          className="font-semibold text-violet-600 underline"
        >
          Mark as Read
        </p>
      </div>
    </div>
  );
};
