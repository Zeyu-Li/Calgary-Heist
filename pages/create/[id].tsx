import Heading from "components/Head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Game() {
  const [questions, setQuestions] = useState([
    { question: "28+6", answer: "1" },
  ]);
  const [name, setName] = useState([""]);
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
      <div className="profile center">
        <div className="profile__buttons">
          <h1>Create</h1>
          <div>
            <button className="button button--black">Create Game</button>
          </div>
        </div>
        <form>
          <input placeholder="Name" required></input>
          <div className="profile__table">
            <h2>Previously created</h2>
            <table>
              {questions.map((question, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input placeholder="New question" required>
                        {question.question}
                      </input>
                      <input placeholder="Answer" required>
                        {question.answer}
                      </input>
                    </td>
                  </tr>
                );
              })}
            </table>
            <button className="button button--blue">Add Question</button>
          </div>
          {/* another numberical text box */}
          <p>Winning Score: </p>
          <button className="button button--black" type="submit">
            Create Game
          </button>
        </form>
      </div>
    </>
  );
}
