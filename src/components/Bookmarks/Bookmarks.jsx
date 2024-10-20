import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, markAsRead }) => {
  return (
    <div className="border rounded-lg p-3 h-fit">
      <div className="border rounded-lg p-4 mb-3 text-white bg-purple-500">
        <h3 className="font-bold text-md">
          Spent time on read: {markAsRead} min
        </h3>
      </div>
      <h2 className="font-bold text-xl mb-4">
        Bookmarked blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
