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
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isCorrect, setCorrectness] = useState<null | Boolean>(null);
  const { id } = useRouter().query;
  const [messages] = useCollection(collection(getFirestore(), "game"));

  useEffect(() => {
    newQuestion();
    console.log(messages);
  }, []);

  useEffect((): any => {
    newQuestion();
    // using id populate form (questions) from firebase
    const id = setInterval(opponentScore, 4000);
    return () => clearInterval(id);
  }, [score2]);

  const opponentScore = () => setScore2(score2 + 1);
  // const opponentScore = () => {
  //   // console.log(score);
  //   // const newScore = [score[0], score[1] + 1];
  //   setScore2(score2 + 1);
  //   setAnswer("");
  // };

  const submitButton = (e: any) => {
    e.preventDefault();
    // make sure to filter entries in games with empty states
    console.log(answer.trim());
    if (answer.trim() === questions[currentQuestion].answer) {
      // correct and pass it along
      console.log("correct");
      setScore1(score1 + 1);
      setCorrectness(true);
      setAnswer("");
      if (score1 + 1 > threshold) {
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
              value={answer}
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
            <span style={{ color: "blue" }}> ${score1}</span> - ${score2}
          </p>
        </div>
      </div>
    </>
  );
}
