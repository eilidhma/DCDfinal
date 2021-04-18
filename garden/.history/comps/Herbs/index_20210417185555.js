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
  width:100%;
  
`;

const Words = styled.p`
display:flex;
font-family: 'Montserrat', sans-serif;
font-size:20px;
color:white;
font-weight:600;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
opacity:${props=>props.opacity};
`;

const Herbs = ({
src="herb.png",
onClick={},
opacity=0
}) => {
  return <Cont onClick={onClick}>
    <Img opacity={opacity} src={src}></Img>
  </Cont>
}

export default Herbs;