import React from "react";
import "../styles/home-page.css";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import logo from "../imgs/logo.png";

function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
