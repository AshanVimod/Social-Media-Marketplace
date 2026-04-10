import React from "react";
import Hero from "../components/Hero";
import LatestListings from "../components/LatestListings";

const Home = () => {
  const [input, setInput] = React.useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>
        <Hero />
        <LatestListings />
      </h1>
    </div>
  );
};

export default Home;
