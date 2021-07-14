import ProductCard from "../cards/ProdCard";
import { getProducts } from "../api/products/index";
import { Container, Cards, Title } from "../../layout/layout";

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

export default Shop;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
