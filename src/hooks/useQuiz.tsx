import { useState } from "react";

export const useQuiz = () => {
  const [idOpenQuiz, setOpenQuiz] = useState(0);
  const [isOpenQuiz, toggleOpenQuiz] = useState(false);

  const setOpennedId = (id: number) => {
    toggleOpenQuiz(true);
    setOpenQuiz(id);
  };

  return { isOpenQuiz, idOpenQuiz, setOpennedId };
};