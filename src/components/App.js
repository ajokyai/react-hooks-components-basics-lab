import React from "react";

// Already defined in the lab
function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h2>Home</h2>
    </div>
  );
}

// ✅ Step 1: Create the About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// ✅ Step 2: Add Navbar, Home, and About inside App
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
