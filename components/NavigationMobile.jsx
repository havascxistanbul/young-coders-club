/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';
import UseAnimations from 'react-useanimations';
import menu3 from 'react-useanimations/lib/menu3'
import { useRouter } from 'next/router';
import classNames from 'classnames'

const NavigationMobile = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(prev => !prev);
  }

  const router = useRouter();

  return (
    <nav className='nav-bar nav-bar--mobile'>
      <button className='nav-bar--mobile__hamburger-icon' onClick={handleClick}>
        <UseAnimations animation={menu3} speed={1.7} size={30} />
      </button>
      <ul className={
        show
          ? 'w-4/5 mx-auto flex justify-center items-center h-16 nav-bar__items nav-bar__items--active'
          : 'w-4/5 mx-auto flex justify-center items-center h-16 nav-bar__items'}>

        <li className='text-m mt-8 nav-bar__item'>
          <a href="#about" className={classNames(
            router.asPath === '/about'
              ? 'nav-bar__item__link nav-bar__item__link--active'
              : 'nav-bar__item__link'
          )}>ABOUT</a>
        </li>
        <li className='text-m mt-8 nav-bar__item'>
          <a href="#supporters" className={classNames(
            router.asPath === '/supporters'
              ? 'nav-bar__item__link nav-bar__item__link--active'
              : 'nav-bar__item__link'
          )}>SUPPORTERS</a>
        </li>
        <li className='text-m mt-8 nav-bar__item'>
          <a href="#timing-and-process" className={classNames(
            router.asPath === '/timing-and-process'
              ? 'nav-bar__item__link nav-bar__item__link--active'
              : 'nav-bar__item__link'
          )}>TIMING & PROCESS</a>
        </li>
        
        <li className='text-m mt-8 nav-bar__item'>
          <a href="#faq" className={classNames(
            router.asPath === '/faq'
              ? 'nav-bar__item__link nav-bar__item__link--active'
              : 'nav-bar__item__link'
          )}>FAQ</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMobile
