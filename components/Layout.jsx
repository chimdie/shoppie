import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components"

const Content = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const siteTitle = "shoppie";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="shoppie website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
}
