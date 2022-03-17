import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';
import TimingAndProcessAccordion from './TimingAndProcessAccordion';
import { nanoid } from 'nanoid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Faq = (props) => {
  const [pathName, setPathName] = useState();
  useEffect(() => {
    setPathName(window.location.pathname.slice(1));
  },[])

  const questions = [];

  for (let i = 0; i < Object.keys(props).length; i++) {
    questions.push([props[`${i}`].fields.heading, documentToReactComponents(props[`${i}`].fields.content)]);
  };

  return (
    <div>
      <div className="faq-accordion lg:mx-20 m-4 mb-14">
        {pathName === 'faq' && 
          questions.map((question) => (
            <Accordion key={nanoid()} title={question[0]} content={question[1]} />
          ))
        }
        {pathName === 'timing-and-process' && 
          questions.map((question) => (
            <TimingAndProcessAccordion key={nanoid()} title={question[0]} content={question[1]} />
          ))
        }
      </div>
    </div>
  );
}

export default Faq
