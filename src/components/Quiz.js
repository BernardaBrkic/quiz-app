import React, { useState } from "react";

import classes from "./Quiz.module.css";
import { questions } from "../Questions";
import Wrapper from "./Wrapper";

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [wasClicked, setWasClicked] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState("");
  const [wasAnswerCorrect, setWasAnswerCorrect] = useState(null);

  const alphabet = ["a", "b", "c", "d"];

  const clickedAnswerHandler = (isCorrect, event) => {
    if (isCorrect) {
      setScore(score + 1);
      setWasAnswerCorrect(true);
    } else {
      setWasAnswerCorrect(false);
    }
    setIsDisabled(true);
    setWasClicked(true);
    setChosenAnswer(event.target.innerText);
  };

  const nextQuestionHandler = () => {
    setIsDisabled(false);
    setWasClicked(false);
    setWasAnswerCorrect(null);
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < questions.length) {
      setQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const className = wasAnswerCorrect
    ? ".chosen-answer correct"
    : ".chosen-answer incorrect";

  return (
    <React.Fragment>
      <Wrapper>
        {showResult ? (
          <div className="score-section">
            <h2>Kraj!</h2>
            Postigli ste {score} od ukupno {questions.length} bodova!
          </div>
        ) : (
          <div>
            <h1>Pitanja</h1>
            <div className={classes["question-section"]}>
              <div className={classes["question-count"]}>
                <span>
                  Pitanje broj <b>{questionIndex + 1}</b>
                </span>{" "}
                od <b>{questions.length}</b>.
              </div>
              <div className={classes["question-text"]}>
                {questionIndex + 1}. {questions[questionIndex].questionText}
              </div>
            </div>
            <section className={classes["answer-section"]}>
              {questions[questionIndex].answerOptions.map((item, i) => (
                <button
                  key={i}
                  className={wasClicked ? "answer" : "answer-clicked"}
                  onClick={(event) =>
                    clickedAnswerHandler(item.isCorrect, event)
                  }
                  disabled={isDisabled}
                >
                  <b>
                    <span>{alphabet[i]}&#41; </span>
                  </b>
                  {item.answerText}
                </button>
              ))}
            </section>
            {wasClicked && wasAnswerCorrect ? (
              <p className={className}>
                Vaš odabrani odgovor <b>{chosenAnswer}</b> je točan!
              </p>
            ) : (
              ""
            )}
            {wasClicked && !wasAnswerCorrect ? (
              <p className={className}>
                Vaš odgovor <b>{chosenAnswer}</b> je netočan! Točan odgovor je{" "}
                <b>{questions[questionIndex].correctAnswerValue}.</b>
              </p>
            ) : (
              ""
            )}

            <button
              onClick={nextQuestionHandler}
              className={classes.next}
              disabled={!isDisabled}
            >
              {questionIndex === questions.length - 1
                ? "Završi"
                : "Sljedeće pitanje"}
            </button>
          </div>
        )}
      </Wrapper>
    </React.Fragment>
  );
};

export default Quiz;
