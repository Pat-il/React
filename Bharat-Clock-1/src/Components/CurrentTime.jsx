import React from 'react'

function CurrentTime() {

  const currDate = new Date();
  const currTime = new Date();

  return (
    <div>
      <p className='class="fs-4"'>This is the Current Time: {currDate.toLocaleDateString()} : {currTime.toLocaleTimeString()}</p>
    </div>
  )
}

export default CurrentTime
