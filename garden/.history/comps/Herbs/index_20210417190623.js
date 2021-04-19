import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  object-fit:cover;
  width:40%;
`;
const Img = styled.img`
  display:flex;
  object-fit:cover;
  width:50%;
  z-index:2;
  transform: rotate($deg);
`;

const Words = styled.p`
display:flex;
font-family: 'Montserrat', sans-serif;
font-size:20px;
color:white;
font-weight:600;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
opacity:${props=>props.opacity};
margin-left:20px;
position:relative;
left:${props=>props.left}px;
z-index:1;
transition: left 1s ease, opacity 1s ease;
`;

const Herbs = ({
src="herb.png",
onClick={},
opacity=0,
left=-250,
text="And according to the US Environmental Protection Agency (EPA), food and food packaging materials make up ≈50% of all municipal solid waste. "
}) => {
  return <Cont >
    <Img onClick={onClick} opacity={opacity} src={src}></Img>
    <Words opacity={opacity} left={left}>{text}</Words>
  </Cont>
}

export default Herbs;