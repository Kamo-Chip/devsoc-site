import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import Alert from "../../../components/Alert";
import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import { format } from "date-fns";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export default function Post({ postData }) {
  const [location, setLocation] = useState("");

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleCopyClick = (copyText) => {
    copyTextToClipboard(copyText)
      .then(() => {
        document.querySelector(".alert").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".alert").style.display = "none";
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLocation(window.location.href);
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <Layout blog={true}>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} key="desc" />
        <meta name="keywords" content={postData.keywords} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:image" content={`/${postData.image}`} />
      </Head>
      <Link href="/blog" className="blogLink">
        <IoIosArrowBack className="blogBack" size="2.5rem" />
      </Link>
      <article className="blogPost" data-aos="fade-in" data-aos-easing="ease">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "1rem",
            fontSize: "1rem",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "grey", fontSize: "14px" }}>
              Updated {format(new Date(postData.date), "dd MMM yyyy")}
            </span>
            <span
              style={{
                padding: ".5rem 1rem",
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "30px",
                marginTop: "1rem",
              }}
            >
              <b>{postData.tag}</b>
            </span>
          </div>
          <BsFillShareFill
            size="2rem"
            onClick={() => handleCopyClick(location)}
            className="shareBtn"
          />
        </div>
        <h1 style={{ marginBottom: "0.5rem" }}>{postData.title}</h1>
        <span style={{ fontSize: "14px" }}>Written by {postData.author}</span>

        <Image
          priority
          src={`/postImages/${postData.image}`}
          alt={postData.imageAlt}
          width={517}
          height={506}
          className="postHeroImg"
        />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Alert />
    </Layout>
  );
}
