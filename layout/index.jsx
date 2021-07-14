import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/globals";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Content = styled.div`
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const siteTitle = "shoppie";

export default function Layout({ children }) {
  return (
    <LayoutContainer className="wrapper">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="shopping website using Next.js" />
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
      <GlobalStyle />
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </LayoutContainer>
  );
}
