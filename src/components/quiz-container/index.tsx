import React from 'react'

export const QuizWrapper = () => {
  return (
    <div className='flex h-screen align-middle justify-center'>
        <div className='flex flex-col h-1/2 w-1/2 m-auto text-center  bg-primary-purple rounded-xl p-4'>
                {/* Tittle Block */}
                <div className='bg-second-purle rounded-xl p-4 w-full align-middle items-center justify-center bg-accent-blue'> 
                    <span className='xl:text-5xl font-normal text-white'>How is JavaScript?</span>
                </div>
                {/* Progress bar */}
                <div className=''>
                    <div className={`h-1 bg-green-300 rounded-xl p`} style={{width: '80%'}}></div>
                </div>
                <div className=' flex flex-col align-middle it w-full   h-1/2'>
                    <ul className='space-y-8 text-center p-4 mt-6 '>
                    <li className='text-black text-center  bg-white py-4 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-green-100'>
                        <span className='text-4xl'>It's programming language</span>
                    </li>
                    <li className='text-black  bg-white py-4 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-green-100'>
                        <span className='text-3xl'>It's programming language</span>
                    </li>
                    <li className='text-black  bg-white py-4 rounded-xl cursor-pointer transition-colors duration-150 hover:bg-green-100'>
                        <span className='text-3xl'>It's programming language</span>
                    </li>
                    </ul>    
                </div>                    
        </div>
    </div>
  )
}
