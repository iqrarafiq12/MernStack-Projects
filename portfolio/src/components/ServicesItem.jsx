import React from 'react'

function ServiceItem({ title, icon, description }) {
  return (
    <div className='bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 p-5 hover:-translate-y-2 transform transition66 rounded-md'>
      <div className='text-cyan-800 dark:text-cyan-200 w-7 h-7 mb-3'>{icon}</div>
      <h1 className='font-semibold text-lg text-cyan-800 dark:text-cyan-200 mb-1'>{title}</h1>
      <p className='text-md text-cyan-800 dark:text-cyan-200 '>{description}</p>
    </div>
  )
}

export default ServiceItem