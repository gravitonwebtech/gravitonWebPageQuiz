import React, { useState } from 'react';
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";
import QuizImage from "./../images/quizimage.png"
import "./Quiz1.css";

export default function Quiz1() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
  
    const changeQuestion = () => {
      updateScore();
      if (currentQuestion < QuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setClickedOption(0);
      } else {
        setShowResult(true);
      }
    };
    const updateScore = () => {
      if (clickedOption === QuizData[currentQuestion].answer) {
        setScore(score + 1);
      }
    };
    const resetAll = () => {
      setShowResult(false);
      setCurrentQuestion(0);
      setClickedOption(0);
      setScore(0);
    };
  return (
    <>
    <div className="bg-[#3aaccb] w-full h-auto md:h-[100vh]">
    <div className="grid grid-cold-1 md:grid-cols-2 gap-5 mx-5 md:mx-20 lg:mx-32 pt-5 sm:pt-8 xxl:pt-20">
        <div className="order-2 sm:order-1 mb-5 sm:mb-0">
        <h1 className='font-semibold text-xl md:text-3xl text-white hidden sm:block'>Quiz Solve</h1>

        <div className="container-quiz-app mt-5 md:mt-10">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="quiz-question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>
            <div className="quiz-option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    // className="option-btn"
                    className={`quiz-option-btn ${
                      clickedOption == i + 1 ? "quiz-checked" : null
                    }`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="quiz-next-button"
              onClick={changeQuestion}
            />
          </>
        )}
        </div>

        </div>

        <div className="sm:pt-10 md:pt-20 lg:pt-14 order-1 sm:order-2">
            <img src={QuizImage} alt="" />
        </div>
    </div>
    </div>
    </>
  )
}
