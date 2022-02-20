import { getAuth } from "@firebase/auth";
import Heading from "components/Head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { exitCode } from "process";
import Error from "next/error";

interface Game {
  creator: string;
  questions: [QA];
}

interface QA {
  question: string;
  answer: string;
}

interface DocId {
  id: string;
}

export default function Game() {
  const [user, loading] = useAuthState(getAuth());
  const [name, setName] = useState("");
  const { id } = useRouter().query as unknown as DocId;
  const questionRef = doc(getFirestore(), "game", id);
  const [questionsData, questionsLoading, err] = useDocumentData(questionRef);
  if (!questionsData) return <Error statusCode={404} />;
  if (loading || questionsLoading) return "";
  const { questions } = questionsData as unknown as Game;

  const createQuestion = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    event.preventDefault();
    if (
      questions?.[questions.length - 1].question == "" ||
      questions?.[questions.length - 1].answer == ""
    )
      return;
    const newQuestions = questions
      ? questions.concat({ question: "", answer: "" })
      : [{ question: "", answer: "" }];
    updateDoc(questionRef, { questions: newQuestions });
  };

  const updateQuestion = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const index = parseInt(event.target.id);
    const value = event.target.value;
    questions[index].question = value;
    updateDoc(questionRef, { questions });
  };
  const updateAnswer = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const index = parseInt(event.target.id);
    const value = event.target.value;
    questions[index].answer = value;
    updateDoc(questionRef, { questions });
  };

  // create game
  const createGame = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <Heading title="Create game" />
      <div className="profile center">
        <div className="profile__buttons">
          <h1>Create</h1>
          <div>
            <button className="button button--black" onClick={createGame}>
              Create Game
            </button>
          </div>
        </div>
        {/* <h2>{user?.displayName}</h2> */}
        <form>
          <div className="profile__table">
            <input
              placeholder="Game Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <table>
              <tbody>
                {questions?.map(({ question, answer }, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          placeholder="New question"
                          id={index.toString()}
                          onChange={updateQuestion}
                          value={question}
                        />
                        <input
                          placeholder="Answer"
                          id={index.toString()}
                          onChange={updateAnswer}
                          value={answer}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button className="button button--dark" onClick={createQuestion}>
              Add Question
            </button>
          </div>
          <p>Winning Score: </p>$
          <input placeholder="Enter Dollars" color="success" required></input>
          <button
            className="button button--black"
            onClick={createGame}
            type="submit"
          >
            Create Game
          </button>
        </form>
      </div>
    </>
  );
}
