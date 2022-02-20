import Heading from "components/Head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Game() {
  const [questions, setQuestions] = useState([
    { question: "What is 28+6", answer: "1" },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState([69, 420]);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setCorrectness] = useState<null | Boolean>(null);
  const { id } = useRouter().query;

  useEffect(() => {
    // using id populate form (questions) from firebase
    newQuestion();
  }, []);

  const submitButton = (e: any) => {
    e.preventDefault();
    // make sure to filter entries in games with empty states
    console.log(answer.trim());
    if (answer.trim() === questions[currentQuestion].answer) {
      // correct and pass it along
      console.log("correct");
      setCorrectness(true);
    } else {
      // incorrect
      setCorrectness(false);
    }
  };

  const newQuestion = () => {
    setCorrectness(null);
  };

  return (
    <>
      <Heading title="Game" />
      <div className="game center">
        <h1>{questions[currentQuestion].question}</h1>
        <div className="game__question">
          <form>
            <input
              placeholder="Your answer"
              required
              className={`transition ${
                isCorrect === null ? null : isCorrect ? "correct" : "incorrect"
              }`}
              onChange={(e) => setAnswer(e.target.value)}
            ></input>
            <button
              className="button button--black"
              type="submit"
              onClick={submitButton}
              style={{ marginLeft: 50 }}
            >
              Submit
            </button>
          </form>
          <h1>Score</h1>
          <p>
            <span style={{ color: "blue" }}> ${score[0]}</span> - ${score[1]}
          </p>
        </div>
      </div>
    </>
  );
}
