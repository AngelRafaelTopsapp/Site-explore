import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex gap-4 p-2 md:p-4">
        <Link
          to="/"
          className="bg-yellow-300 text-blue-900 p-2 md:p-4 rounded shadow-lg text-center transition-transform transform hover:scale-105"
        >
          Home
        </Link>
        <Link
          to="/quiz"
          className="bg-yellow-300 text-blue-900 p-2  md:p-4 rounded shadow-lg text-center transition-transform transform hover:scale-105"
        >
          Post-it 1
        </Link>
        <Link
          to="/flowers"
          className="bg-yellow-300 text-blue-900 p-2 md:p-4 rounded shadow-lg text-center transition-transform transform hover:scale-105"
        >
          Post-it 2
        </Link>
        <Link
          to="/message"
          className="bg-yellow-300 text-blue-900 p-2 md:p-4 rounded shadow-lg text-center transition-transform transform hover:scale-105 "
        >
          Post-it 3
        </Link>
        <Link
          to="/candycrush"
          className="bg-yellow-300 text-blue-900 p-2 md:p-4 rounded shadow-lg text-center transition-transform transform hover:scale-105"
        >
          Post-it 4
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
