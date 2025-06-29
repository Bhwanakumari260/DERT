import React from "react";
import Navbar from "../Navbar/Navbar";


function HomePage() {
  return (
    <>
     <Navbar />
     <div className="home-img" >
      <img src="images/background.jpg" alt="background image" style={{width:"50%",height:"100%"}}/>
     </div>
     <div style={{paddingLeft: 700, paddingTop: 200, fontSize: 20}}>
      <div style={{textAlign: "center"}}>
        <h1>Repair Smarter</h1>
      </div>
      <div style={{paddingRight: 200, fontSize: 20,}}>
        <p>Achieve peak efficiency with our advanced defence repair tracker.
        <p>Strealine operations and reduce downtime with ease.</p>
        </p>
        <p>Revolutionary defence repair.</p>
      </div>
    </div>
    </>
  );
}

export default HomePage;