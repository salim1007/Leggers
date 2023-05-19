import React from 'react'
import Typical from 'react-typical'

const MotionText = () => {
  return (
    <div>
      
        <p className=' text-xl'>
            This is {' '}
            <Typical 
            loop={Infinity}
            wrapper="i"
            steps={[
                'a limited time offer!',
                1000,
                'your chance to buy!',
                1000,
              
              
            ]}
            
            />
        </p>
    </div>
  )
}

export default MotionText