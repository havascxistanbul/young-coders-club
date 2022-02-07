import React from 'react'
import Header from '../components/Header';
import HeroSwiper from '../components/HeroSwiper';
import Inpage from '../components/Inpage';
import ApplyForm from '../components/ApplyForm';
import Faq from '../components/Faq';
import { createClient } from 'contentful'
import Head from 'next/head';


const client = createClient({
  space: process.env.CF_SPACE_ID,
  accessToken: process.env.CF_ACCESS_TOKEN,
})

// export const getStaticPaths = async () => {
//   const res = await client.getEntries({
//     content_type: 'page'
//   })

//   const paths = res.items.map(item => {
//     return {
//       params: {
//         slug: item.fields.slug
//       }
//     }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }

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

  const res = await client.getEntries({ content_type: 'faq' });
  const faq = res.items;
  const { slug } = context.params;
  return {
    props: { content, faq },
  }
}

export default function Page(props) {
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
        {props.content.slug === 'apply-now' && <ApplyForm />}
        {props.content.slug === 'faq' && <Faq {...props.faq} />}
      </main>
    </>
  )
}

