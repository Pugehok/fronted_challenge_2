import { QuizMenu } from "../quiz-wrapper"


export const MainContent = () => {
  return (
    <div className="flex flex-row  h-screen items-center justify-around">
            <div className="flex flex-col ml-8">
                <h1 className="text-6xl font-light text-secondary">Welcome🎉</h1>
                <span className="text-6xl font-bold text-secondary">Frontend quiz app!</span>
            </div>

            <div className="w-3/12 h-1/2">
                <QuizMenu/>
            </div>

            
    </div>

)
}

