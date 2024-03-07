import { useState } from "react";
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
  const [currentStep, nextStep] = useState(0);
  const [userAnswers, setAnswers] = useState<number[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [questionList, setQuestionList] = useState<Questions[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Questions>();

  const setData = (id: number): void => {
    const data: Quiz = QuizDB[id];
    setCorrectAnswers(getCorrectAnswers(data.Quizes));
    setQuestionList(data.Quizes);
    setCurrentQuestion(data.Quizes[0]);
  };

  const handleAnswer = (answer: number): void => {
    setCurrentQuestion(questionList[currentStep+1]);
    nextStep(currentStep + 1);
    setAnswers(() => [...userAnswers, answer]);
  };

  const getCorrectAnswers = (data: Array<Questions>) => {
   return data.map((quiz: Questions) => {
        return quiz.correct;
   })
};

  return {
    setData,
    userAnswers,
    maxStep: questionList.length,
    currentQuestion,
    correctAnswers,
    questionList,
    handleAnswer,
  };
};
