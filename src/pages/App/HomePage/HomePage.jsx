import { Link } from "react-router-dom";
import NavBar from "../../../components/Navbar/Navbar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen  flex flex-col items-center gap-10 justify-center">
        <h1 className="text-3xl font-bold text-blue-100 pb-36">DIVIRTA-SE</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-24">
          <Link
            to="/quiz"
            className="bg-yellow-300 text-blue-900 p-24 rounded shadow-lg text-center transition-transform transform hover:scale-105 -rotate-12"
          >
            Post-it 1
          </Link>
          <Link
            to="/flowers"
            className="bg-yellow-300 text-blue-900 p-24 rounded shadow-lg text-center transition-transform transform hover:scale-105 rotate-12"
          >
            Post-it 2
          </Link>
          <Link
            to="/message"
            className="bg-yellow-300 text-blue-900 p-24 rounded shadow-lg text-center transition-transform transform hover:scale-105 -rotate-12"
          >
            Post-it 3
          </Link>
          <Link
            to="/candycrush"
            className="bg-yellow-300 text-blue-900 p-24 rounded shadow-lg text-center transition-transform transform hover:scale-105 rotate-12"
          >
            Post-it 4
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
