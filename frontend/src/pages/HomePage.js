import React from "react";
import '../styles/home-page.css'
import logo from '../imgs/logo.png';

function HomePage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <img src={logo} className="homepage-logo" alt="logo" height="100px" />
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </header>
    </div>
  );
}

export default HomePage;
