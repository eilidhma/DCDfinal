import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  object-fit:cover;
  width:100%;
`;
const Img = styled.img`
  display:flex;
  width: 50%;
  max-width:100px;
  position:relative;
  left:${props=>props.left}%;
  top:${props=>props.top}px;
  z-index:1;
  transition: top 2s, left 2s;
`;

const Facts = styled.p`
  display:flex;
  font-family: 'Montserrat', sans-serif;
  font-size:20px;
  color:white;
  font-weight:600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;




const Groceries = ({
text="Strawberries may contain up to 40 different pesticides",
left="0",
top="0",
onClick=()=>{},
src="strawberries.png"
}) => {

  return <Cont>
    <Img left={left} top={top} onClick={onClick} src={src}></Img>
  </Cont>
}

export default Groceries;