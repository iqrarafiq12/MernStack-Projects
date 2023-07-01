import React from 'react'

function ServicesTitle({ children, id }) {
  return (
    <h1
      id={id && id}
      className='text-3xl font-bold mb-5 text-cyan-800 dark:text-cyan-200'>{children}</h1>
  )
}

export default ServicesTitle