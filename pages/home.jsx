//Default
import React, { useState, useEffect } from "react";
import Head from "next/head";

// Components
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Inpage from "../components/Inpage";
import Faq from "../components/Faq";
import InpageWithBg from "../components/InpageWithBg";
import TimingAndProcss from "../components/TimingAndProcess";

// Contentful
import { createClient } from "contentful";

const client = createClient({
  space: process.env.CF_SPACE_ID || process.env.NEXT_PUBLIC_CF_SPACE_ID,
  accessToken:
    process.env.CF_ACCESS_TOKEN || process.env.NEXT_PUBLIC_CF_ACCESS_TOKEN,
});

export async function getServerSideProps(context) {
  const { items } = await client.getEntries({
    content_type: "page",
  });

  const components = items[0].fields.components;
  const content = {
    components,
  };

  // Get FAQ Accordion Items
  const resFaq = await client.getEntries({ content_type: "faq" });
  const faq = resFaq.items;

  // Get Timing & Process Accordion Items
  const resTimingAndProcess = await client.getEntries({
    content_type: "courseContent",
  });
  const timingAndProcess = resTimingAndProcess.items;

  // const { slug } = context.params;
  return {
    props: { content, faq, timingAndProcess },
  };
}

export default function Page(props) {
  const [heroBannerItems, setHeroBannerItems] = useState({
    image: {
      fileName: "",
      url: "",
    },
    cta: {
      text: "",
      url: "https://www.linkedin.com/jobs/view/3393155732/?refId=i17dQbK0YAVu0VbuA4ktuQ%3D%3D",
    },
    id: "",
  });

  const [inpageContent, setInpageContent] = useState([]);

  useEffect(() => {
    const components = props.content.components;
    const heroBanner = components.filter(
      (item) => item.sys.contentType.sys.id === "heroBanner"
    )[0];

    setInpageContent(
      components.filter(
        (item) => item.sys.contentType.sys.id === "inpageContent"
      )
    );

    const heroBannerCtaID = heroBanner.fields.cta.sys.id;
    const heroBannerImage = heroBanner.fields.image.fields.file;
    const componentId = heroBanner.fields.componentId;

    client
      .getEntry(heroBannerCtaID)
      .then((entry) => {
        setHeroBannerItems({
          image: heroBannerImage,
          cta: entry.fields,
          id: componentId,
        });
      })
      .catch(console.error);
  }, [props, setHeroBannerItems, setInpageContent]);

  return (
    <>
      <Head>
        <title>Young Coders Club</title>
        <meta property="og:title" content="Young Coders Club" key="title" />
        <meta
          property="description"
          content="Want to work in our global IT projets? Join Young Coders Club for our free training session and kickstart your career!"
        />
        <meta
          property="og:description"
          content="Want to work in our global IT projets? Join Young Coders Club for our free training session and kickstart your career!"
          key="description"
        />
        <meta name="google-site-verification" content="Azk4C6n-oUu2Rt0AafV6vzdGJrddKrYKkuqlcjAivSc" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:image" key="og_image" content="/favicon.png" />
      </Head>
      <main>
        <Header />
        <HeroBanner {...heroBannerItems} />
        {inpageContent.map((item) => (
          <div key={item.fields.name}>
            {item.fields.componentId === "supporters" ? (
              <InpageWithBg {...item.fields} />
            ) : (
              <Inpage {...item.fields} />
            )}
            {item.fields.componentId === "faq" && <Faq {...props.faq} />}
            {item.fields.componentId === "timing-and-process" && (
              <TimingAndProcss {...props.faq} />
            )}
          </div>
        ))}
      </main>
    </>
  );
}
