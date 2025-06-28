import React from "react";
import Navbar from "../Navbar/Navbar";


function HomePage() {
  return (
    <>
     <Navbar />
     <div className="home-img" >
      <img src="images/background.jpg" alt="background image" style={{width:"100%",height:"100%"}}/>
     </div>
      
    </>
  );
}

export default HomePage;