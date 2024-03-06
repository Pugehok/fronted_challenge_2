import React from 'react'

export const QuizWrapper = () => {
  return (
    <div className='flex h-screen align-middle justify-center'>
        <div className='flex flex-col  m-auto text-center  bg-primary-purple rounded-xl p-4'>
                {/* Tittle Block */}
                <div className='bg-second-purle rounded-xl p-8 w-full align-middle items-center justify-center bg-accent-blue'> 
                    <span className='xl:text-5xl font-normal text-white'>How is JavaScript?</span>
                </div>
                {/* Progress bar */}
                <div className=''>
                    <div className={`h-1 w-[25%] bg-green-300 rounded-xl p`}></div>
                </div>
                {/* Variant Answers list */}
                <div className=' flex flex-col align-middle w-full'>
                    <ul className='space-y-8 text-center p-4 mt-6 '>
                    <li className='text-black  bg-white py-8 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-green-100'>
                        <span className='xl:text-3xl'>It's programming language</span>
                    </li>
                    <li className='text-black  bg-white py-8 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-green-100'>
                        <span className='xl:text-3xl'>It's programming language</span>
                    </li>
                    <li className='text-black  bg-white py-8 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-green-100'>
                        <span className='xl:text-3xl'>It's programming language</span>
                    </li>
                    </ul>    
                </div>                    
        </div>
    </div>
  )
}
