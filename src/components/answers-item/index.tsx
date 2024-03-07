import { animated, useSpring } from "@react-spring/web";

interface props {
  handler: (answer: number) => void;
  index: number;
  text: string;
}

export const AnswerItem = (props: props) => {
  const [motionState] = useSpring(
    () => ({
      from: { opacity: 0, },
      config: {
        duration: 400,
      },
      to: { opacity: 1,},
    }),
    [],
  );

  return (
    <animated.div style={motionState}>
      <li
        className="text-black  bg-white py-8 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-green-100"
        onClick={() => props.handler(props.index)}
      >
        <span className="xl:text-3xl">{props.text}</span>
      </li>
    </animated.div>
  );
};
