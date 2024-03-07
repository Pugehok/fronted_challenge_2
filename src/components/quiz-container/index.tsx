import { useEffect, useState } from "react";
import { useAnswer } from "../../hooks/useAnswer";
import { AnswerItem } from "../answers-item";
type props = {
  quiz_id: number;
};

export const QuizWrapper = (props: props) => {
  const { getQuizes, maxStep, currentQuestion, handleAnswer, userCorrect } =
    useAnswer();
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const Test = false;
  const Handler = (answer: number) => {
    setUserAnswers(() => [...userAnswers, answer]);
    handleAnswer();
  };

  useEffect(() => {
    getQuizes(props.quiz_id);
  }, [props.quiz_id]);

  return (
    <>
      {Test ? (
        <>
          <div className="flex h-screen align-middle justify-center">
            <div className="flex flex-col w-1/2  m-auto text-center  bg-primary-purple rounded-xl p-4">
              <div className="bg-second-purle rounded-xl p-8 w-full align-middle items-center justify-center bg-accent-blue">
                <span className="xl:text-5xl font-normal text-white">
                  {currentQuestion?.title}
                </span>
              </div>
              <div className="">
                <div
                  className={`h-1 bg-green-300 rounded-xl p`}
                  style={{ width: "50%" }}
                ></div>
              </div>
              {/* Variant Answers list */}
              <div className=" flex flex-col align-middle w-full">
                <ul className="space-y-8 text-center p-4 mt-6 ">
                  {currentQuestion?.answers.map((element, index) => {
                    return (
                      <AnswerItem
                        index={index}
                        key={index}
                        handler={Handler}
                        text={element}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex h-screen align-middle justify-center">
            <div className="flex flex-col w-1/2  m-auto text-center  bg-primary-purple rounded-xl p-4">
              <div className="bg-second-purle rounded-xl p-8 w-full align-middle items-center justify-center bg-main-purple">
                <span className="xl:text-2xl font-normal text-white">
                  Поздравляем, вы успешно закончили тест! 🥂
                </span>
              </div>
              <ul className="text-center w-full  m-auto p-8">
                {1 > 0 ? (
                  <>
                    <li className="text-white  bg-green-600  py-8 shadow-xl rounded-lg whitespace-pre-line">
                      <span className="xl:text-2xl font-bold">
                         {`Отличный результат!\nТы ответил на ${userCorrect(userAnswers)} из ${maxStep} вопрсов правильно!`}
                          
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                  <li className="text-white  bg-red-400  py-8 rounded-lg whitespace-pre-line">
                      <span className="xl:text-2xl">
                          К сожалению тебе не удалось ответить не на один вопрос, подтяни свои знания и возвращайся!🤯
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};
