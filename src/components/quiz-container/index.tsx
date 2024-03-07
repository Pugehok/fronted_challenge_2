import { useEffect } from "react";
import { useAnswer } from "../../hooks/useAnswer";
import { AnswerItem } from "../answers-item";
type props = {
  quiz_id: number;
};

export const QuizWrapper = (props: props) => {
  const {
    setData,
    maxStep,
    currentQuestion,
    handleAnswer,
  } = useAnswer();

  useEffect(() => {
    setData(props.quiz_id);
  }, [props.quiz_id]);

  return (
    <div className="flex h-screen align-middle justify-center">
      <div className="flex flex-col w-1/2  m-auto text-center  bg-primary-purple rounded-xl p-4">
        {/* Tittle Block */}
        <div className="bg-second-purle rounded-xl p-8 w-full align-middle items-center justify-center bg-accent-blue">
          <span className="xl:text-5xl font-normal text-white">
            {currentQuestion?.title}
          </span>
        </div>
        {/* Progress bar */}
        <div className="">
          <div
            className={`h-1 bg-green-300 rounded-xl p`}
            style={{ width: "50%" }}
          ></div>
        </div>
        {/* Variant Answers list */}
        <div className=" flex flex-col align-middle w-full">
          <ul className="space-y-8 text-center p-4 mt-6 ">
            {currentQuestion?.answers.map((element, index)=>{
                return <AnswerItem index={index} handler={handleAnswer} text={element}/>
            })} 
          </ul>
        </div>
      </div>
    </div>
  );
};
