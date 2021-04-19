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


const Herbs = ({
src="wrap_closed.png",
text="Click the wrap!",
onClick={},
opacity=1
}) => {
  return <Cont onClick={onClick}>
    <Img opacity={opacity} src={src}></Img>
  </Cont>
}

export default Wrap;