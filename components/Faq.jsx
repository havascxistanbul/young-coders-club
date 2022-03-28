import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';
import { nanoid } from 'nanoid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Faq = (props) => {
  const questions = [];

  for (let i = 0; i < Object.keys(props).length; i++) {
    questions.push([props[`${i}`].fields.heading, documentToReactComponents(props[`${i}`].fields.content)]);
  };

  return (
    <div className="faq-accordion lg:mx-44 lg:mt-20 mx-16 mt-8">
      {
        questions.map((question) => (
          <Accordion key={nanoid()} title={question[0]} content={question[1]} />
        ))
      }
    </div>
  );
}

export default Faq
