import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  const [input, setInput] = React.useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>
        <Hero />
      </h1>
    </div>
  );
};

export default Home;
