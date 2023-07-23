import Header from "./components/Header"
import Footer from "./components/Footer"
import MainPage from "./components/MainPage";
import AbootUs from "./components/AboutUs";
import EcoFriendly from "./components/EcoFriendly";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";

import React from "react";

function App() {

  return (<>
    <Header />
    <MainPage />

    <AbootUs />
    <EcoFriendly />
    <Gallery />
    <Testimonials />
    <Newsletter />

    <Footer />
  </>
  )
}


export default App;
