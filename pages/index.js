import Layout from "../layout";
import CatCard from "./cards/CatCard";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <Main className='home'>
      <Row>
        <CatCard img="https://imgur.com/Dm212HS.png" name="pad" />
        <CatCard img="https://imgur.com/uKQqsuA.png" name="Xbox" />
        <CatCard img="https://imgur.com/3Y1DLYC.png" name="PS5" />
      </Row>
      <Row>
        <CatCard img="https://imgur.com/qb6IW1f.png" name="PC" />
        <CatCard img="https://imgur.com/HsUfuRU.png" name="Accessories" />
      </Row>
    </Main>
  );
}

Home.getLayout = (Home) => (
  <Layout>
    {Home}
  </Layout>
)
