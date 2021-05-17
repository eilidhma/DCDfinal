import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  object-fit:cover;
  width:70vw;
  margin-top:30px;
`;


const CartImg = styled.img`
  display:flex;
  object-fit:cover;
  width:50%;
  min-width:250px;
  z-index:2;
`;



const Cart = ({

}) => {

  return <Cont>
    <CartImg src="cart.png"></CartImg>
  </Cont>
}

export default Cart;