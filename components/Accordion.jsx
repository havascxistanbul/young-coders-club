import React, { useState } from 'react';

const Faq = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="border-ycc-pink border-solid rounded relative mb-4">
      <div className="flex justify-between items-center bg-white text-text-gray pt-4 pb-2 border-ycc-pink border-solid border-b hover:cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <div className="text-l lg:text-xl font-semibold">{title}</div>
        <div className="text-ycc-pink text-3xl font-light">{!isActive ? '+' : '-'}</div>
      </div>
      <div className={!isActive ? "opacity-0 overflow-hidden w-3/4 h-0 text-xs transition-all duration-300" : "block p-6 opacity-100 w-full text-base transition-all duration-300 accordion-item__content"}>{content}</div>
      {/* <div className={!isActive ? "absolute left-0 top-0 w-2 bg-ycc-pink h-0 transition-all duration-300" : "absolute left-0 top-0 w-2 bg-ycc-pink h-full transition-all duration-300"}></div> */}
    </div>
  )
}

export default Faq
