import React from 'react';
import Image from 'next/image';

const HeroSwiper = (props) => {
  const imageUrl = props.image.url
  const imageAlt = props.image.name

  const ctaText = props.cta.text;
  const ctaHref = props.cta.url;

  if(imageUrl === ''){
    return <div className="h-[500px]"></div>
  }

  return (
    <div className='relative'>
      <Image src={`https:${imageUrl}`} alt={imageAlt} priority layout='responsive' width={1200} height={500}/>
      <a className='cta absolute z-10 bottom-12 left-12 border-2 border-white p-2 lg:p-4 bg-white text-black uppercase' href={ctaHref} target='_blank' rel="noreferrer">
        <span className="lg:text-3xl text-xl">{ctaText}</span>
      </a>
    </div >
  )
}

export default HeroSwiper
