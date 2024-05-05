import Head from "next/head";
import Layout, { name } from "../components/layout";
import Image from "next/image";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <Layout blog={true}>
      <Head>
        <title>The DevSoc Blog</title>
      </Head>
      <section className="blogContainer">
        {/* <h1>{"Our Thoughts on a Variety of Topics"}</h1> */}
        <ul className="blogList">
          {allPostsData.map(
            ({ id, date, title, tag, image, imageAlt, preview }) => (
              <Link
                href={`/blog/posts/${id}`}
                key={id}
                className="blogItem"
                data-aos="fade-right"
                data-aos-easing="ease"
              >
                <li className="blogPreviewDetails">
                  <Image
                    priority
                    src={`/postImages/${image}`}
                    alt={imageAlt}
                    width={517}
                    height={506}
                  />
                  <div className="blogPreviewText">
                    <span>{tag}</span>
                    <h3>{title}</h3>
                    <small>
                      <Date dateString={date} />
                    </small>
                    <p>{preview}</p>
                  </div>
                </li>
              </Link>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}
