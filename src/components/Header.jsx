import React from "react";
import quizLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header className="mb-8 mt-8 text-center">
      <img
        src={quizLogo}
        alt="Quiz Logo"
        className="mx-auto mb-3 h-14 w-14 drop-shadow-md"
      />
      <h1 className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-3xl font-bold uppercase tracking-widest text-transparent font-RobotoCondensed">
        Quizy
      </h1>
    </header>
  );
};

export default Header;
