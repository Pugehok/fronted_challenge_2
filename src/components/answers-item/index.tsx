interface props {
  handler: (answer: number) => void;
  index: number;
  text: string;
}

export const AnswerItem = (props: props) => {
  return (
    <li
      className="text-black  bg-white py-8 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-green-100"
      onClick={() => props.handler(props.index)}
    >
      <span className="xl:text-3xl">{props.text}</span>
    </li>
  );
};
