import { Outlet } from "react-router-dom";
/* "; */
import HomePage from "../App/HomePage/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-300">
      <HomePage />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
