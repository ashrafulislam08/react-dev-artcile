import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="border rounded-lg p-3 h-fit">
      {bookmarks.map((bookmark) => (
        <Bookmark bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
