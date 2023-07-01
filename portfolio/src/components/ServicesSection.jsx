import React from 'react'
import ServicesTitle from './ServicesTitle'
import Services from '../data/Services'
import ServicesItem from './ServicesItem'

function ServicesSection() {
  return (
    <div className='py-12'>
    <ServicesTitle>Our Services</ServicesTitle>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
    {Services.map(service => (
        <ServicesItem
          key={service.title}
          title={service.title}
          icon={service.icon}
          description={service.description}
        ></ServicesItem>
      ))}
    </div>
    </div>
  )
}

export default ServicesSection