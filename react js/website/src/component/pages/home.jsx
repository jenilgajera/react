import React from "react";
import Slider from "../inc/slider";

function Home() {
  return (
    <>
    <div className="maincontaien">
      <Slider />
      <hr></hr>
      <header className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome to My Website</h1>
          <p className="lead">This is a simple hero section using Bootstrap</p>
          <a href="#" className="btn btn-primary btn-lg mt-3">
            Get Started
          </a>
        </div>
      </header>
    </div>
    </>
  );
}

export default Home;
