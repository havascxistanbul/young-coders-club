import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Inpage = (props) => {
  return (
    <div className='page lg:m-20 m-8'>
      <h1 className='text-5xl lg:text-7xl page__header text-color lg:mb-8 mb-6'>
        {props.heading}
      </h1>
      <div className='page__content'>
        {documentToReactComponents(props.editor)}
      </div>
    </div>
  )
}

export default Inpage;
