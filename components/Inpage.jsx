import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Inpage = (props) => {

  return (
    <div id={props.componentId} className='page lg:mx-20 lg:mt-20 mx-8 mt-8'>
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
