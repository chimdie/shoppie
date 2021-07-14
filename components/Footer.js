import { siteTitle } from "../layout";
import styled from "styled-components";

const Content = styled.footer`
  width: 100%;
  height: 50px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return <Content>Powered by {siteTitle}</Content>;
};

export default Footer;
