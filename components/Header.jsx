import React from 'react';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobile from './NavigationMobile';

const Header = () => {
  return (
    <div className='header flex justify-center relative z-30'>

      <div className='header__logo absolute top-0 left-0'>
        <img className='header__logo__self' src='/logo.jpg' alt='YCC Logo' />
      </div>

      <div className='nav-bar lg:relative left-20 static'>
        <NavigationDesktop />
        <NavigationMobile />
      </div>
    </div>
  )
}

export default Header
