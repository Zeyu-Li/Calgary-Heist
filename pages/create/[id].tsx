import { getAuth } from "@firebase/auth";
import Heading from "components/Head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { Button, Input } from "@mui/material";
import { exitCode } from "process";
import Error from "next/error";


interface Game {
  creator: string
  questions: [QA]
}

interface QA {
  question: string
  answer: string
}

interface DocId {
  id: string
}

export default function Game() {
  const [user, loading] = useAuthState(getAuth());
  const { id } = useRouter().query as unknown as DocId;
  const questionRef = doc(getFirestore(), 'game', id);
  const [questionsData, questionsLoading, err] = useDocumentData(questionRef);
  if (!questionsData) return <Error statusCode={404} />
  if (loading || questionsLoading) return ''
  const { questions } = questionsData as unknown as Game;

  const createQuestion = () => {
    if (questions?.[questions.length - 1].question == ''
      || questions?.[questions.length - 1].answer == '') return;
    const newQuestions = questions
      ? questions.concat({ question: '', answer: '' })
      : [{ question: '', answer: '' }];
    updateDoc(questionRef, { questions: newQuestions });
  }

  const updateQuestion = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const index = parseInt(event.target.id);
    const value = event.target.value;
    questions[index].question = value;
    updateDoc(questionRef, { questions });
  }
  const updateAnswer = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const index = parseInt(event.target.id);
    const value = event.target.value;
    questions[index].answer = value;
    updateDoc(questionRef, { questions });
  }

  return (
    <>
      <Heading title="Create game" />
      <div className="profile center">
        <div className="profile__buttons">
          <h1>Create</h1>
          <div>
            <button className="button button--black">Create Game</button>
          </div>
        </div>
        <h2>{user?.displayName}</h2>
        <form>
          <div className="profile__table">
            <h2>Previously created</h2>
            <table>
              <tbody>
                {questions?.map(({ question, answer }, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <Input placeholder="New question" id={index.toString()} fullWidth multiline onChange={updateQuestion} value={question} />
                        <Input placeholder="Answer" id={index.toString()} fullWidth onChange={updateAnswer} value={answer} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Button onClick={createQuestion}>Add Question</Button>
          </div>
          {/* another numberical text box */}
          <p>Winning Score: </p>
          $<Input placeholder="Enter Dollars" color="success"></Input>
        </form>
      </div>
    </>
  );
}
