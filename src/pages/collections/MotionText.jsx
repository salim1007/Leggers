import React from 'react'
import Typical from 'react-typical'

const MotionText = () => {
  return (
    <div>
      
        <p className=' text-lg ml-2'>
            This is {' '}
            <Typical 
            loop={Infinity}
            wrapper="i"
            steps={[
                'a limited time offer!',
                1000,
                'your chance to shop!',
                1000,
              
              
            ]}
            
            />
        </p>
    </div>
  )
}

export default MotionText