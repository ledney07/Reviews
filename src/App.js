import React from "react";
import "./index.css";
import Reviews from "./reviews";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

export default App;

//This application example of useEffect and Conditional Rendering
