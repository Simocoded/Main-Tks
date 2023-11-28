import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./Components/Landing page/Homepage";
import Service from "./Components/Servic part/service";
import Below from "./Components/below/Below";
import Ceo from "./Components/CEO/Ceo";
import Footer from "./Components/Footer/Footer";
import "./App.css";

import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <Body /> */}
      <Homepage />
      <Service />
      <Below />
      <Ceo />
      <Footer />
    </div>
  );
}

export default App;
