import React from 'react'

function CurrentTime() {

  const currDate = new Date();

  return (
    <div>
      <p className='class="fs-4"'>This is the Current Time: {currDate.toLocaleDateString()} : {currDate.toLocaleTimeString()}</p>
    </div>
  )
}

export default CurrentTime
