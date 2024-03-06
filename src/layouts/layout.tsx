import { ReactNode } from "react"
import { useSpring, animated } from '@react-spring/web'

interface IProps{
  children: ReactNode
}


export const Layout = (props: IProps) => {
  const [motionState] = useSpring(
    () => ({
      from: { opacity: 0,},
      config:{
        duration:300
      },
      to: { opacity: 1 },
      
    }),
    []
  )

  return (
    
    <div className='container mx-auto'>
      <animated.div style={motionState}>
          {props.children}
      </animated.div>
    </div>
  )
}
