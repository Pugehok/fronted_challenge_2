import { ReactNode } from "react"

interface IProps{
  children: ReactNode
}


export const Layout = (props: IProps) => {
  return (
    <div className='container mx-auto'>
        {props.children}
    </div>
  )
}
