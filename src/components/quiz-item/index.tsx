
interface IProps {
  tittle: string,
  image: string
}


export const QuizItem = (props: IProps) => {
  return (
      <li className='bg-secondary-purple h-14 flex items-center space-x-3 rounded-xl cursor-pointer transition-all  duration-150 hover:bg-main-purple'>
          <img src={props.image} alt=""  className='w-10 ml-2'/>
          <h1 className='text-3xl text-secondary font-semibold'>{props.tittle}</h1>
      </li>
  )
}
