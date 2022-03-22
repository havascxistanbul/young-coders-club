//Default
import React from 'react'
import Head from 'next/head';

// Components
import Header from '../components/Header';
import HeroSwiper from '../components/HeroSwiper';
import Inpage from '../components/Inpage';
import Faq from '../components/Faq';
import TechStack from '../components/TechStack'
import Brands from '../components/Brands';

// Contentful
import { createClient } from 'contentful'


const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_ACCESS_TOKEN,
})

export async function getServerSideProps(context) {
  const { items } = await client.getEntries({
    content_type: 'page',
  })
  const components = items[0].fields.components;
  const content = {
    components,
  }
  // Get FAQ Accordion Items
  const resFaq = await client.getEntries({ content_type: 'faq' });
  const faq = resFaq.items;

  // Get Timing & Process Accordion Items
  const resTimingAndProcess = await client.getEntries({ content_type: 'courseContent' });
  const timingAndProcess = resTimingAndProcess.items;

  // const { slug } = context.params;
  return {
    props: { content, faq, timingAndProcess },
  }
}

export default function Page(props) {
  const components = props.content.components;
  const slider = components.filter((item) => item.sys.contentType.sys.id === 'slider');
  const inpageContent = components.filter((item) => item.sys.contentType.sys.id === 'inpageContent');

  console.log(props)
  return (
    <>
      <Head>
        <title>Young Coders Club</title>
        <meta property="og:title" content='Young Coders Club' key="title" />
        <meta property="description" content="Want to work in our global IT projets? Join Young Coders Club for our free training session and kickstart your career!" />
        <meta property="og:description" content="Want to work in our global IT projets? Join Young Coders Club for our free training session and kickstart your career!" key="description" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:image" key="og_image" content="/favicon.png" />
      </Head>
{/* 
    //   <main className='container mx-auto overflow-hidden'>
    //     <Header />
    //     <HeroSwiper {...props.content.components[0].images} />
    //     {props.content.slug === 'faq' && <Faq {...props.faq} />}
    //     {props.content.slug === 'about' && <Brands />}
    //     {props.content.slug === 'timing-and-process' && <Faq {...props.timingAndProcess} />}
    //   </main> */}
      <main>
        <Header />
        <HeroSwiper {...slider[0].fields.images} />
        {inpageContent.map((item) => (
          <div key={item.fields.name}>
            <Inpage {...item.fields} />
            {item.fields.componentId === 'faq' && <Faq {...props.faq} />}
            {item.fields.componentId === 'timing-and-process' && <TechStack {...props.timingAndProcess} />}
            {item.fields.componentId === 'about' && <Brands />}

          </div>
        ))}
      </main>
    </>
  )
}

