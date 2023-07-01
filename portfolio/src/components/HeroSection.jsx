import React from 'react'

function HeroSection() {
  return (
    <div className='flex item-center justify-center flex-col py-20'>
      <div className='text-center'>
        <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-cyan-800 dark:text-cyan-200 '>Hi, This Is Iqra</h1>
        <p className='text-md md:text-xl mb-3 text-cyan-600 dark:text-cyan-200'>Clean code always looks like it was written by someone who cares.</p>
        <a href='./WorksItem' class="text-gray-700 bg-gradient-to-r from-cyan-400 to-lime-400 hover:bg-gradient-to-l hover:from-cyan-300 hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">See Work</a>
      </div>

    </div>
  )
}

export default HeroSection