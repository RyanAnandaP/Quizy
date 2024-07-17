import React, { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnweredRef = useRef();

  if (!shuffledAnweredRef.current) {
    shuffledAnweredRef.current = [...answers];
    shuffledAnweredRef.current.sort(() => Math.random() - 0.5);
  }

  const getButtonClasses = (ans) => {
    if (answerState === "answered" && ans === selectedAnswer) {
      return "bg-[#f5a76c] text-[#2c203d] font-semibold hover:bg-none";
    }
    if (answerState === "correct" && ans === selectedAnswer) {
      return "bg-[#5af59d] text-[#2c203d] font-semibold";
    } else if (answerState === "wrong" && ans === selectedAnswer) {
      return "bg-red-500 text-[#2c203d] font-semibold";
    }
    return "bg-bgButton font-normal hover:bg-hoverButton";
  };
  return (
    <ul className="m-0 flex list-none flex-col items-center gap-3 p-0">
      {shuffledAnweredRef.current.map((ans) => {
        return (
          <li key={ans} className="mx-auto w-9/12">
            <button
              onClick={() => onSelect(ans)}
              className={`inline-block w-full cursor-pointer rounded-full border-none px-5 py-4 text-lg text-black font-RobotoCondensed ${getButtonClasses(ans)}`}
              disabled={answerState !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
