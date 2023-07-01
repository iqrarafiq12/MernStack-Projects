import React from 'react'
import ServicesTitle from './ServicesTitle'
import Image from './Images/avatar.jpg'

function AboutSection() {
  return (
    <div className='flex fle-cols md:flex-row items-center gap-10 md:gap-20 py-20'>
      <div className='w-full md:w-6/12'>
        <ServicesTitle>About Me</ServicesTitle>
        <p className='mx-auto flex-wrap max-w-md text-md text-cyan-800 dark:text-cyan-200 wrap' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum illum reprehenderit molestiae repudiandae iusto minima. Expedita eos enim mollitia eaque accusamus vero harum vel voluptatum quasi iure nobis, ad voluptatem.
        </p>
        <a href='' className='block mt-3 text-md md:text-lg font-regular text-cyan-800 dark:text-cyan-200 underline hover:text-cyan-900 hover:hover:text-cyan-900'>iqrarafiq@gmail.com</a>
      </div>
      <div>
        <img class="rounded-full object-cover w-full md:w-6/12" src={Image} alt="" />

      </div>
    </div>
  )
}

export default AboutSection
