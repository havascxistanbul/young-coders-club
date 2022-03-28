import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames'

const NavigationLinks = () => {
  const router = useRouter();
  return (
    <ul className='mx-auto flex justify-center items-center h-16 nav-bar__items'>
      <li className='text-m mr-16 nav-bar__item'>
        <Link href={'/home#about'}>
          <a className={classNames(
            router.asPath === '/home#about'
              ? 'nav-bar__item__link nav-bar__item__link--active'
              : 'nav-bar__item__link'
          )}>ABOUT</a>
        </Link>
      </li>
      <li className='text-m mr-16 nav-bar__item'>
        <Link href={'/home#supporters'}>
          <a className={classNames(
            router.asPath === '/home#supporters'
              ? 'nav-bar__item__link nav-bar__item__link--active'
              : 'nav-bar__item__link'
          )}>SUPPORTERS</a>
        </Link>
      </li>
      <li className='text-m mr-16 nav-bar__item'>
        <Link href={'/home#timing-and-process'}>
          <a className={classNames(
            router.asPath === '/home#timing-and-process'
              ? 'nav-bar__item__link nav-bar__item__link--active'
              : 'nav-bar__item__link'
          )}>TIMING & PROCESS</a>
        </Link>
      </li>
      <li className='text-m mr-16 nav-bar__item'>
        <Link href={'#apply-now'}>
          <a className={classNames(
            router.asPath === '#apply-now'
              ? 'nav-bar__item__link nav-bar__item__link--active'
              : 'nav-bar__item__link'
          )}>APPLY NOW</a>
        </Link>
      </li>
      <li className='text-m mr-16 nav-bar__item'>
        <Link href={'#faq'}>
          <a className={classNames(
            router.asPath === '#faq'
              ? 'nav-bar__item__link nav-bar__item__link--active'
              : 'nav-bar__item__link'
          )}>FAQ</a>
        </Link>
      </li>
    </ul>
  )
}

export default NavigationLinks
