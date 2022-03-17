import React, { useState } from 'react';

const TimingAndProcessAccordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="border-ycc-pink border-solid rounded relative mb-2">
      <div className="flex items-center bg-white text-text-gray hover:cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <div className="text-ycc-pink rounded-full text-xl font-light mr-4">{!isActive ? '+' : '-'}</div>
        <div className="text-l lg:text-l font-semibold">{title}</div>
      </div>
      <div className={!isActive ? "opacity-0 overflow-hidden w-3/4 h-0 text-xs transition-all duration-300" : "block p-4 opacity-100 w-full text-base transition-all duration-300 accordion-item__content"}>{content}</div>
    </div>
  )
}

export default TimingAndProcessAccordion
