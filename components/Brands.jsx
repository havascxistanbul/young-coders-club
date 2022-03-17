import React from 'react'

const Brands = () => {
  return (
    <div className="page lg:m-20 m-8 lg:mt-0 mt-0">
      <ul className="flex items-center ">
        <li className="w-16 mr-4">
          <a href="https://ekino.com/" target="_blank" rel="noreferrer" className="w-full">
            <img src="/brands/ekino.png" className="w-full" />
          </a>
        </li>
        <li className="w-16 mr-4">
          <a href="https://havascx.com/" target="_blank" rel="noreferrer" className="w-full bg-ycc-pink">
            <img src="/brands/havas-cx.png" className="w-full" />
          </a>
        </li>
        <li className="w-16 mr-4">
          <a href="https://www.ph.com.tr" target="_blank" rel="noreferrer" className="w-full">
            <img src="/brands/ph.png" className="w-full" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Brands