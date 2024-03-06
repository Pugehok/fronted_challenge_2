import { Layout } from "./layouts/layout";
import { MainContent } from "./components/main-content";
import { useState } from "react";
import { QuizWrapper } from "./components/quiz-container";
import { useQuiz } from "./hooks/useQuiz";
const App = () => {
  const { isOpenQuiz, idOpenQuiz, setOpennedId } = useQuiz();
  const Timed = false;
  return (
    <>
      <Layout>
        {isOpenQuiz ? (
          <QuizWrapper quiz_id={idOpenQuiz} />
        ) : (
          <MainContent quiz_handler={setOpennedId} />
        )}
      </Layout>
    </>
  );
};

export default App;
