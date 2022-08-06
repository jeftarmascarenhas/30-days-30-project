import React from "react";
import { Container, InteractivePriceCard } from "./components";
import PatternCircles from "./assets/images/pattern-circles.svg";

function App() {
  return (
    <>
      <header>
        <h1>Simple, traffic-based pricing</h1>
        <img src={PatternCircles} alt="pattern-circles" />
      </header>
      <Container>
        <InteractivePriceCard />
      </Container>
    </>
  );
}

export default App;
