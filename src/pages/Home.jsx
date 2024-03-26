import React from "react";
import SliderMenu from "../Components/SliderMenu.jsx";
import DetailPage from "../Components/DetailPage.jsx";

function Home() {
  return (
    <div className="flex">
      <SliderMenu />
      <DetailPage />
    </div>
  );
}

export default Home;
