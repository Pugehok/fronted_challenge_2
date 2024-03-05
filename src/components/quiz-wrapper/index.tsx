import { QuizList } from "../quiz-list"


export const QuizMenu =  () => {
  return (
        <div className="w-96 flex bg-primary-purple text-center flex-col pt-8 space-y-2 h-fit rounded-xl">
           <div className="pt-8">
            <span className="text-white text-3xl">Список квизов✍️</span>
            </div>
          <div className="">
            <QuizList/>
        </div>
        <div className="pb-4">
          {/* Pages block after */}
          <span className="text-white text-2xl">1 / 10</span>
        </div>
    </div>
    )
}
