"use client";

import Typewriter from "typewriter-effect";
const Writer = () => {
  return (
    <Typewriter
      options={{
        strings: ["tasks", "notes", "website"],
        loop: true,
        autoStart: true,
        typeSpeed: 100,
        deleteSpeed: 40
      }}
    />
  );
};

export default Writer;
