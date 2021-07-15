import ProductCard from "../cards/ProdCard";
import { getProducts } from "../api/products/index";
import { Container, Cards, Title } from "../../layout/layout";
import Layout from "../../layout";

const Shop = ({ products }) => {
  return (
    <Container>
      <Title>All Results</Title>
      <Cards>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Cards>
    </Container>
  );
};

Shop.getLayout = (Shop) => <Layout>{Shop}</Layout>;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default Shop;
