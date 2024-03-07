import {useState } from "react";
import { QuizDB } from "../constants/QuizList";

interface Questions {
  id: number;
  title: string;
  answers: Array<string>;
  correct: number;
}

interface Quiz {
  id: number;
  Quizes: Array<Questions>;
}

export const useAnswer = () => {
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [questionList, setQuestionList] = useState<Questions[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Questions>();
  const [step, nextStep] = useState(0);

  const getCorrectAnswers = (data: Array<Questions>) => {
    return data.map((quiz: Questions) => {
      return quiz.correct;
    });
  };
  
  
  const getQuizes = (id: number): void => {
    const data: Quiz = QuizDB[id];
    setCorrectAnswers(getCorrectAnswers(data.Quizes));
    setQuestionList(data.Quizes);
    setCurrentQuestion(data.Quizes[0]);
  };

  const handleAnswer = (): void => {
    nextStep(step + 1);
    setCurrentQuestion(questionList[step + 1]);
  };

  const userCorrect = (userAnswers: Array<number>): number => {
    let counter = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if(userAnswers[i] == correctAnswers[i]) counter++;
    }
    return counter
  };


  return {
    getQuizes,
    maxStep: questionList.length,
    currentQuestion,
    correctAnswers,
    questionList,
    handleAnswer,
    userCorrect,
  };
};
