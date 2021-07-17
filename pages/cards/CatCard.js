import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  text-align: center;
  background: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Card = styled.div`
  position: relative;
  background: transparent;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px 2px #e1eaea;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
    transition: all 500ms cubic-bezier(0.14, 0.96, 0.91, 0.6);

    ${Info} {
      opacity: 0.5;
    }
  }
`;

const ImgWrapper = styled.div`
  display: block;
  object-fit: cover;
`;

const CatCard = ({ img, name }) => {
  return (
    <Card>
      <ImgWrapper>
        <Image src={img} alt="cat" width={300} height={150} />
      </ImgWrapper>
      <Link href={`/category/${name.toLowerCase()}`}>
        <Info>
          <h3>{name}</h3>
          <h6>shop now</h6>
        </Info>
      </Link>
    </Card>
  );
};

export default CatCard;
