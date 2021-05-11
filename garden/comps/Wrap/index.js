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
  opacity:${props=>props.opacity}
`;
const ClickMe = styled.p`
  display:flex;
  font-family: 'Montserrat', sans-serif;
  font-size:20px;
  color:white;
  font-weight:600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity:${props=>props.opacity};
`;


const Wrap = ({
src="wrap_closed.svg",
text="Click the wrap!",
onClick={},
opacity=1
}) => {
  return <Cont onClick={onClick}>
    <Img opacity={opacity} src={src}></Img>
  </Cont>
}

export default Wrap;

