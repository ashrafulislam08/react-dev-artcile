import { DiCodeBadge } from "react-icons/di";
import Profile from "../../assets/profile.png";
const Header = () => {
  return (
    <header className="px-3 pt-4 mb-3">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <h2 className="font-bold text-3xl">
            <DiCodeBadge className="inline align-middle" />
            Dev Article
          </h2>
        </div>

        {/* Profile */}
        <div>
          <img src={Profile} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
