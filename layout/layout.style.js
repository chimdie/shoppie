import styled from "styled-components";

const Container = styled.div`
  padding: 0 2rem;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  margin: 0 1rem 1rem;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 2.5rem 1rem;
  place-items: center;
`;

export { Container, Title, Cards };
