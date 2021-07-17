import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  deleteFromCart,
} from "../../redux/cartSlice";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Header = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  ${div} {
    flex: 1;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
    text-transform: uppercase;
    border-bottom: 2px solid black;
    margin-bottom: 2rem;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
`;

const Inner = styled.div`
  flex: 1;
`;
const ImageWrapper = styled.div`
  width: 100px;
`;

const ButtonWrapper = styled.div`
  width: 25px;
  height: 30px;
  background-color: black;
  color: white;
  border: none;
  margin: 0.5rem;
  font-size: 1rem;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(increaseQty(item.id));
  };
  const decrement = () => {
    dispatch(decreaseQty(item.id));
  };
  const remove = () => {
    dispatch(deleteFromCart(item.id));
  };
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <Container>
      {cart.length === 0 ? (
        <h3>empty cart</h3>
      ) : (
        <>
          <Header>
            <div>Image</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Actions</div>
            <div>Total Price</div>
          </Header>
          {cart.map((item) => {
            <Main>
              <Inner>
                <ImageWrapper>
                  <Image src={item.image} height={90} width={70} />
                </ImageWrapper>
                <p>{item.product}</p>
                <p>$ {item.price}</p>
                <p>{item.quantity}</p>
                <ButtonWrapper>
                  <button onClick={increment}>+</button>
                  <button onClick={decrement}>-</button>
                  <button onClick={remove}>x</button>
                </ButtonWrapper>
                <p>$ {item.quantity * item.price}</p>
              </Inner>
            </Main>;
          })}
          <h3>Total: $ {getTotalPrice()}</h3>
        </>
      )}
    </Container>
  );
};
