import "./App.css";
import Cities from "./components/cities";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import Places from "./components/places";
// import Places from "./components/places";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cities />
      <Places />
      <Footer />
    </>
  );
}

export default App;
