import { QuizMenu } from "../quiz-wrapper";

type props = {
  quiz_handler: (id: number) => void;
};

export const MainContent = (props: props) => {
  return (
    <div className="flex flex-col space-y-20 text-center md:text-left md:space-y-2 md:flex-row  h-screen md:w-9/12 items-center  md:justify-around">
      <div className="flex flex-col mt-24">
        <h1 className="text-4xl xl:text-6xl font-light text-secondary">
          Welcome🎉
        </h1>
        <span className="text-4xl xl:text-6xl font-bold text-secondary">
          Frontend quiz app!
        </span>
      </div>
      <div className="md:w-1/12">
        <QuizMenu quiz_handler={props.quiz_handler} />
      </div>
    </div>
  );
};
