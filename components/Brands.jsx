import React from 'react'

const Brands = () => {
  return (
    <ul className="grid grid-cols-3 grid-flow-col gap-12 items-center">
        <li className="w-20">
        <a href="https://havascx.com/" target="_blank" rel="noreferrer" className="w-full bg-ycc-pink">
          <img src="/brands/havas-cx.png" className="w-full" />
        </a>
      </li>
      <li className="w-20">
        <a href="https://ekino.com/" target="_blank" rel="noreferrer" className="w-full">
          <img src="/brands/ekino.png" className="w-full" />
        </a>
      </li>
      <li className="w-20">
        <a href="https://www.ph.com.tr" target="_blank" rel="noreferrer" className="w-full">
          <img src="/brands/ph.png" className="w-full" />
        </a>
      </li>
    </ul>
  )
}

export default Brands