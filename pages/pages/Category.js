import { useRouter } from "next/router";
import ProdCard from "../cards/ProdCard";
import { getProCat } from "../api/products/[category]";
import { Container, Cards, Title } from "../../layout/layout";

const Category = ({ products }) => {
  const router = useRouter();
  return (
    <Container>
      <Title>Results for {router.query.category}</Title>
      <Cards>
        {products.map((product) => (
          <ProdCard key={product.id} product={product} />
        ))}
      </Cards>
    </Container>
  );
};

export default Category;

export async function getServerSideProps(ctx) {
  const category = ctx.query.category;
  const products = await getProCat(category);
  return { props: { products } };
}
