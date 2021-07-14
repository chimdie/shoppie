import Image from "next/image";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h4`
  font-size: 1rem;
  font-weight: 600;
`;

const Category = styled.h5`
  font-size: 0.8rem;
  text-transform: uppercase;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.75rem 0;
  background: transparent;
  text-transform: uppercase;
  border: 2px solid black;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} height={300} width={220} />
      <Title>{product.product}</Title>
      <Category>{product.category}</Category>
      <p>$ {product.price}</p>
      <Button>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
