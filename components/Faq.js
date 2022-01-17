import React from 'react';
import Accordion from './Accordion';
import { nanoid } from 'nanoid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Faq = (props) => {
  const questions = [];

  for (let i = 0; i < Object.keys(props).length; i++) {
    questions.push([props[`${i}`].fields.heading, documentToReactComponents(props[`${i}`].fields.content)]);
  };

  return (
    <div>
      <div className="faq-accordion lg:m-20 m-4 mb-14">
        {questions.map((question) => (
          <Accordion key={nanoid()} title={question[0]} content={question[1]} />
        ))}
      </div>
    </div>
  );
}

export default Faq
