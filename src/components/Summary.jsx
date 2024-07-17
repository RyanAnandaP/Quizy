import React from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../Questions.jsx";

const Summary = ({ userAnswers }) => {
  const skippedAnswer = userAnswers.filter((answer) => answer === null);
  const correctAnswer = userAnswers.filter(
    (answer,index) => answer === QUESTIONS[index].answers[0],
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswer.length / userAnswers.length) * 100,
  );
  const correctAnswersShare = Math.round(
    (correctAnswer.length / userAnswers.length) * 100,
  );

  const wrongAnswerShare = 100 - skippedAnswersShare - correctAnswersShare

  return (
    <div id="summary">
      <img
        src={quizCompleteImg}
        alt="Quiz Complete image"
        className="mx-auto mb-4 block h-20 w-20 rounded-full border-2 border-purple-800 bg-purple-200 object-contain p-2"
      />
      <h2 className="font-RobotoNormal m-0 text-center text-3xl font-semibold uppercase text-completeText">
        Quiz Completed!
      </h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>

        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Answer Correctly</span>
        </p>

        <p>
          <span className="number red">{wrongAnswerShare}%</span>
          <span className="text">Answer Incorrectly</span>
        </p>
      </div>
      <ol className="mx-auto mb-8 mt-8 list-none p-0 text-center">
        {userAnswers.map((ans, index) => {
          let answerStyling = " text-[#A2A4B6]";
          if (ans === null) {
            answerStyling = " text-white font-normal";
          } else if (ans === QUESTIONS[index].answers[0]) {
            answerStyling = " text-green-800";
          } else {
            answerStyling = " text-red-800";
          }

          return (
            <li key={index} className="my-8">
              <h3 className="font-RobotoCondensed mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#2c203d] text-base text-[#d8cde8]">
                {index + 1}
              </h3>
              <p className="mb-1 mt-1 text-base text-[#30273a]">
                {QUESTIONS[index].text}
              </p>
              <p
                className={`font-RobotoCondensed mb-1 mt-1 font-bold capitalize ${answerStyling}`}
              >
                {ans ?? "You Skipped this question"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
