import { useRouter } from "next/router";
import ProdCard from "../cards/ProdCard";
// import { getProCat } from "../api/products/[category]";
import { Container, Cards, Title } from "../../layout/layout.style";

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

// export async function getServerSideProps(ctx) {
//     const category = ctx.query.category;
//     const products = await getProCat(category);
//     return { props: { products } };
// }

export async function getServerSideProps({ req, query }) {
  // Fetch data from external API
  // console.log("context : :", Object.keys(req));
  let products = await fetch(
    `http://${req.headers.host}/api/products?q=${query.name}`
  )
    .then((res) => {
      if (!res.ok) {
        throw res.statusText;
      }
      return res.json(); //we only get here if there is no error
    })
    .then(function (data) {
      console.log({ data });
      return data;
    })
    .catch((err) => {
      console.log({ err });
    });

  // Pass data to the page via props
  return {
    props: { products },
  };
}
