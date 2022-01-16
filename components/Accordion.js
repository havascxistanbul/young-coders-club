import React, { useState } from 'react';
import { createClient } from 'contentful';

const Faq = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="mb-4 border-ycc-pink border-solid border-2 rounded">
      <div className="flex justify-between bg-ycc-pink text-white p-4 border-ycc-pink border-solid border-b-2 hover:cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <div className="">{title}</div>
        <div className="">{!isActive ? '+' : '-'}</div>
      </div>
      <div className={!isActive ? "hidden w-0" : "block p-4"}>{content}</div>
    </div>
  )
}

export default Faq
