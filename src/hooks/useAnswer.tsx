import { useState } from "react";
import { QuizDB } from "../constants/QuizList";

interface IQuizes {
  id: number;
  question_title: string;
  answers: Array<string>;
  correct: number;
}

export const useAnswer = () => {
  const [currentStep, nextStep] = useState(0);
  const [maxStep, setMaxStep] = useState(0);
  const [answers, setAnswers] = useState(Array<number>);
  const [correctAnswers, setCorrectAnswers] = useState(Array<number>);
  const [questionList, setQuestionList] = useState(Array<any>);

  const setData = (id: number): void => {
    const data = QuizDB[id];
    console.log(data.Quizes.length);
    setMaxStep(data.Quizes.length);
    setCorrectAnswers(getCorrectAnswers(data.Quizes));
  };

  const getCorrectAnswers = (data: Array<IQuizes>) => {
    const correct = data.map((quiz: IQuizes) => {
      return quiz.correct;
    });
    console.log(correct);
    return correct;
  };

  return { setData, maxStep, correctAnswers };
};
