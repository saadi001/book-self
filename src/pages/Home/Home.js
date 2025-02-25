import React from "react";
import Footer from "../Shared/Footer/Footer";
import Contactus from "./ContactUs/Contactus";
import FAQ from "./FAQ/FAQ";
import Items from "./Items/Items";
import Landingpage from "./Landingpage/Landingpage";

const Home = () => {
  return (
    // responsiveness calculation (mx-3 md:mx-8 lg:mx-28 xl:mx-32 2xl:max-w-7xl 2xl:mx-auto)
    <div className="w-full">
      <Landingpage></Landingpage>
      <div className="mx-3 md:mx-8 lg:mx-28 xl:mx-32 2xl:max-w-7xl 2xl:mx-auto pt-5">
        <Items></Items>
        {/* <Shops></Shops> */}
        <Contactus></Contactus>
        <FAQ></FAQ>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
