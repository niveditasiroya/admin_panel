import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Routers from "./Components/Routers";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
