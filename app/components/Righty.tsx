import React, { CSSProperties } from 'react'



const leftSidebarStyle: CSSProperties = {
  position: 'fixed',
  bottom: 0,
  right: '1rem`', // matches left-6
  zIndex: 40
};
function Righty() {
  return (
    <div
    className="fixed right-1  text-white bottom-0 flex flex-col  items-center  md:flex"
    style={leftSidebarStyle}
  >
    <div className='text-lg mb-30 text-white rotate-90'>ansh1005mishra@gmail.com</div>
   
    <div className="h-40 border-2 border-gray-400 w-0.5 bg-text-muted"></div>
  </div>

  )
}

export default Righty