import React from 'react'
import { QuizItem } from '../quiz-item'
import { QuizList as Quizes } from '../../constants/QuizList'






export const QuizList = () => {
  return (
    <ul className='space-y-12 p-8 flex flex-col align-middle text-center'>
        {Quizes.map((elemet)=> 
          <QuizItem tittle={elemet.QuizTitle}  image={elemet.url_image} key={elemet.id} />
        )}

    </ul>
  )
}
