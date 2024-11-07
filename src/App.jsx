import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./App.css";
import Cities from "./components/cities";
import Footer from "./components/footer";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import Places from "./components/places";
// import Places from "./components/places";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <ClipLoader color="#00bcd4" loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <Cities />
          <Places />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
