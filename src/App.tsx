import { Layout } from "./layouts/layout"
import { MainContent } from "./components/main-content"
import { useState } from "react"
import { QuizWrapper } from "./components/quiz-container"

const  App = () => {
const [isOpenQuiz, ToggleQuiz] = useState(true);

  return (
    <>
          <Layout>
            {isOpenQuiz? <QuizWrapper/> :  <MainContent/> }
          </Layout>
    </>
  )
}

export default App
