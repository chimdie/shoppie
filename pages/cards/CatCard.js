import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  background: white;
  padding: 0.5rem 1.5rem;
  text-align: center;
  transform: translate(-50%, -50%);
  opacity: 0.8;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Card = styled.div`
  position: relative;
  flex: 1 1 auto;
  margin: 0.5rem;

  box-shadow: 0 2px 4px whitesmoke;
  &:hover {
    transform: scale(1.1);
    transition: all 500ms cubic-bezier(0.14, 0.96, 0.91, 0.6);
  }

  &${Info}:hover {
    opacity: .5;
  }
`;

const ImgWrapper = styled.div`
  object-fit: cover;
  overflow: hidden;
  display: block
`;



const Name = styled.h3`

`

const CatCard = ({ img, name }) => {
  return (
    <Card>
      <ImgWrapper>
        <Image src={img} alt="cat" width={250} height={120} />
      </ImgWrapper>
      {/* <Link href={`/category`}></Link> */}
      <Info>
        <h3>{name}</h3>
        <h6>shop now</h6>
      </Info>
    </Card>
  );
};

export default CatCard;
