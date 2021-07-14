import ProductCard from "../cards/ProdCard";
import { getProducts } from "../api/products/index";
import { Container, Cards, Title } from "../../layout/layout.style";
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

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

Shop.Layout = Layout;
export default Shop;
