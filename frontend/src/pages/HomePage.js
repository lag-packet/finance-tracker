import React from "react";
import "../styles/home-page.css";
import logo from "../imgs/logo.png";

function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <header className="text-center my-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Finance Tracker
        </h1>
        <p className="text-gray-600">
          Homepage
        </p>
      </header>

      <main>
        <section className="my-8">
          <h2 className="text-2xl font-semibold text-gray-700">Features</h2>
          <div className="flex justify-around mt-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                Feature One
              </h3>
              <p className="text-gray-600">Description of feature one.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                Feature Two
              </h3>
              <p className="text-gray-600">Description of feature two.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-800">
                Feature Three
              </h3>
              <p className="text-gray-600">Description of feature three.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center my-8">
        <p className="text-gray-600">© 2024 Finance Tracker</p>
      </footer>
    </div>
  );
}

export default HomePage;
