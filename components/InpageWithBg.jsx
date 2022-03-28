import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Brands from './Brands';

const InpageWithBg = (props) => {

  return (
    <div id={props.componentId} className="w-screen bg-ycc-pink">
      <div className='page lg:px-20 lg:py-20 px-8 py-8'>
        <h1 className='text-5xl lg:text-7xl page__header page__header--alternative lg:mb-8 mb-6 uppercase'>
          {props.heading}
        </h1>
        <div className='flex flex-col lg:flex-row lg:items-start'>
          <div className='page__content page__content--alternative basis-2/3'>
            {documentToReactComponents(props.editor)}
          </div>
          <div className='mx-auto mt-8 lg:mt-0'>
            <Brands />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InpageWithBg;
