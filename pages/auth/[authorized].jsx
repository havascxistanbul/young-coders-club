//Default
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

// Components
import Header from '../../components/Header';
import HeroSwiper from '../../components/HeroSwiper';
import Inpage from '../../components/Inpage';
import ApplyForm from '../../components/ApplyForm';

// Contentful
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_ACCESS_TOKEN,
})

export async function getServerSideProps(context) {
  const { items } = await client.getEntries({
    content_type: 'page',
    'fields.slug': context.params.slug
  })

  const components = items[0].fields.components.map((component) => {
    return component.fields
  })

  const content = {
    name: items[0].fields.name,
    components,
    slug: items[0].fields.slug,
  }

  return {
    props: { content },
  }
}

const Authorized = (props) => {
  
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const query = window.location.search;
    const cleanQuery = query.replace('?','');
    const parts = cleanQuery.split('&');
    const a = {};
    for (const part of parts ) {
      const [key, value] = part.split('=');
      a[key] = value;
    }

    setUser({
      name: a.name,
      lastName: a.lastName,
    });

  }, []);
  if (user === null) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>{`YCC | ${props.content.name}`}</title>
        <meta property="og:title" content={`YCC | ${props.content.name}`} key="title" />
        <meta property="description" content="Want to work in our global IT projets? Join Young Coders Club for our free training session and kickstart your career!" />
        <meta property="og:description" content="Want to work in our global IT projets? Join Young Coders Club for our free training session and kickstart your career!" key="description" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:image" key="og_image" content="/favicon.png" />
      </Head>

      <main className='container mx-auto overflow-hidden'>
        <Header />
        <HeroSwiper {...props.content.components[0].images} />
        <Inpage {...props.content.components[1]} />
        <ApplyForm {...user} />
      </main>
    </>
  )

  
}

export default Authorized