import Image from "next/image";
import styled from "styled-components";

const Content = styled.footer`
  width: 100%;
  height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  height: 1em;
  margin-left: 0.5rem;
`;

const Footer = () => {
  return (
    <Content>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <Logo>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Logo>
      </a>
    </Content>
  );
};

export default Footer;
