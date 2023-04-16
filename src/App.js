import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="bg-black h-screen	text-white font-poppins">
      <div className="mx-6 md:max-w-6xl md:mx-auto grid grid-cols-[3fr_10fr] gap-6 grid-rows-[auto_1fr]">
        <Header />
        <Navbar />
        <main className="content">
          <Profile />
        </main>
      </div>
    </div>
  );
}

export default App;
