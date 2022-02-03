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

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'page'
  })

  const paths = res.items.map(item => {
    return {
      params: {
        slug: item.fields.slug
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'page',
    'fields.slug': params.slug
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
  const { slug } = params;
  return {
    props: { content, faq },
  }
}


export default function Page(props) {
  return (
    <>
      <Head>
        <title>{`YCC | ${props.content.name}`}</title>
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

