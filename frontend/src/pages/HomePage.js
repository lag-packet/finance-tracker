import React from "react";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

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
