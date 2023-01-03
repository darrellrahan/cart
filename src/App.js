import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import { useGlobalContext } from "./context";

function App() {
  const { data } = useGlobalContext();

  if (data.isLoading) return <h1 className="loading-text">Loading...</h1>;

  return (
    <>
      <Header />
      <Section />
    </>
  );
}

export default App;
