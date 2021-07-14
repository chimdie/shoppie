import Layout from "../layout";
import CatCard from "./cards/CatCard";
import Image from "next/image";
import styled from "styled-components";

const Main = styled.div`
  padding: 0 2rem;
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; */
`

const Small = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;
`;

const Large = styled(Small)`
/* transform: scale(1.1, 1) */
`;

export default function Home() {
  return (
    <Main>
      <Small>
        <CatCard img="https://imgur.com/uKQqsuA.png" name="Xbox" />
        <CatCard img="https://imgur.com/3Y1DLYC.png" name="PS5" />
        <CatCard img="https://imgur.com/Dm212HS.png" name="Switch" />
      </Small>
      <Large>
        <CatCard img="https://imgur.com/qb6IW1f.png" name="PC" />
        <CatCard img="https://imgur.com/HsUfuRU.png" name="Accessories" />
      </Large>
    </Main>
  );
}

Home.Layout = Layout;
