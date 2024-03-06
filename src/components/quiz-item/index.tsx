interface IProps {
  id: number;
  tittle: string;
  image: string;
  handler: (id: number) => void;
}

export const QuizItem = (props: IProps) => {
  return (
    <li
      className="bg-secondary-purple h-14 flex items-center space-x-3 rounded-xl cursor-pointer transition-all duration-150 ease-in hover:bg-main-purple hover:shadow-xl"
      onClick={() => props.handler(props.id)}
    >
      <img src={props.image} alt="" className="w-10 ml-2" />
      <h1 className="text-3xl text-secondary font-semibold">{props.tittle}</h1>
    </li>
  );
};
