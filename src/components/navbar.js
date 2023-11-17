import React from 'react'

function Navbar() {
  return (
    <div className='h-12 w-full bg-[rgba(0,0,0,0.49)] items-center flex justify-between px-[10%]'>
      <div className='flex gap-2 items-center'>  <img src='/weather logo.svg'/><div className='text-white font-bold text-base '>Weather 99</div>
      </div>
      <div className='flex gap-1  text-white'>
        <button onClick={()=>{window.location.reload();}}><img src='/refresh-circle.svg'/></button>
        <h1 className='text-white '>Refresh</h1>
      </div>
    </div>
  )
}

export default Navbar
