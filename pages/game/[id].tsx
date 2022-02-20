import Heading from "components/Head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { collection, doc, getFirestore } from "firebase/firestore";

export default function Game() {
  const [questions, setQuestions] = useState([
    { question: "What is 28+6", answer: "1" },
    { question: "What is 1+1", answer: "2" },
    { question: "What is 4*4", answer: "16" },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [threshold, setThreshold] = useState(3);
  const [score, setScore] = useState([0, 0]);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setCorrectness] = useState<null | Boolean>(null);
  const { id } = useRouter().query;
  const [messages] = useCollection(collection(getFirestore(), "game"));

  useEffect(() => {
    // using id populate form (questions) from firebase
    newQuestion();
    console.log(messages);
  }, []);

  const submitButton = (e: any) => {
    e.preventDefault();
    // make sure to filter entries in games with empty states
    console.log(answer.trim());
    if (answer.trim() === questions[currentQuestion].answer) {
      // correct and pass it along
      console.log("correct");
      setScore([score[0] + 1, score[1]]);
      setCorrectness(true);
      if (score[0] + 1 > threshold) {
        // you win
        alert("You Win");
      } else {
        newQuestion();
      }
    } else {
      // incorrect
      setCorrectness(false);
    }
  };

  const newQuestion = () => {
    setCorrectness(null);
    setCurrentQuestion(Math.floor(Math.random() * questions.length));
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
