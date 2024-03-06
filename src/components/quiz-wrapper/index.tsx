import { QuizList } from "../quiz-list";

type props = {
  quiz_handler: (id: number) => void;
};

export const QuizMenu = (props: props) => {
  return (
    <div className="w-fit h-fit md:w-96 flex bg-primary-purple text-center flex-col pt-8 space-y-8 xl:h-1/2 rounded-xl">
      <div className="p-4 xl:p-6">
        <span className="text-white text-3xl">Список квизов✍️</span>
      </div>
      <div className="">
        <QuizList quiz_handler={props.quiz_handler} />
      </div>
      <div className="pb-4">
        {/* Pages block after */}
        <span className="text-white text-2xl">1 / 10</span>
      </div>
    </div>
  );
};
