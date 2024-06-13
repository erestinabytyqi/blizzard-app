import React from 'react'
import Solutions from './Solutions'

function OurSolutions() {
  return (
    <div className='text-white mt-40'>   
        <h1 className='text-4xl mt-10 font-bold ml-20'>Our Solutions</h1>
        <p className='text-xl text-gray-400 ml-20 pt-5'>
            We deliver cutting-edge technology for networking and connectivity,<br/> 
            ensuring your peace of mind with unparalleled security and reliability

        </p>
        <div className='mt-10'>
            <Solutions/>
        </div>
    </div>
  )
}

export default OurSolutions