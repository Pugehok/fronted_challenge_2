import { QuizItem } from "../quiz-item";
import { QuizList as Quizes } from "../../constants/QuizList";

type props = {
  quiz_handler: (id: number) => void;
};

export const QuizList = (props: props) => {
  return (
    <ul className="space-y-10 xl:space-y-12 p-8 flex flex-col align-middle text-center">
      {Quizes.map((elemet) => (
        <QuizItem
          id={elemet.id}
          tittle={elemet.QuizTitle}
          image={elemet.url_image}
          key={elemet.id}
          handler={props.quiz_handler}
        />
      ))}
    </ul>
  );
};
