import { Layout } from "./layouts/layout";
import { MainContent } from "./components/main-content";
import { QuizWrapper } from "./components/quiz-container";
import { useQuiz } from "./hooks/useQuiz";
const App = () => {
  const { isOpenQuiz, idOpenQuiz, setOpennedId, closer } = useQuiz();
  
  return (
    <>
      <Layout>
        {isOpenQuiz ? (
          <QuizWrapper quiz_id={idOpenQuiz} closer={closer} />
        ) : (
          <MainContent quiz_handler={setOpennedId} />
        )}
      </Layout>
    </>
  );
};

export default App;
