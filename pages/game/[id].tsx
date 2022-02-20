import Heading from "components/Head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Game() {
  const [questions, setQuestions] = useState([
    { question: "28+6", answer: "1" },
  ]);
  const [score, setScore] = useState([69, 420]);
  const { id } = useRouter().query;

  useEffect(() => {
    // using id populate form (questions) from firebase
  }, []);

  const createGame = () => {
    // make sure to filter entries in games with empty states
  };

  return (
    <>
      <Heading />
      <div className="game center">
        <h1>What is {questions[0].question}</h1>
        <div className="game__question">
          <form>
            <input placeholder="Your answer" required></input>
            <button className="button button--black" type="submit">
              Submit
            </button>
          </form>
          <h1>Score</h1>
          <p>
            ${score[0]} - ${score[1]}
          </p>
        </div>
      </div>
    </>
  );
}
