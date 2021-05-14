import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  object-fit:cover;
  width:40vw;
  max-width:250px;
  animation: can 3s infinite ease-out alternate;
  margin-bottom: 10%;
`;
const Img = styled.img`
  display:flex;
  object-fit:cover;
  width:100%;
  opacity:${props=>props.opacity};
  transition: opacity 2s;
`;



const PestCan = ({
src="wrap_closed.svg",
onClick=()=>{},
opacity=1
}) => {
  return <Cont onClick={onClick}>
    <Img opacity={opacity} src={src}></Img>
  </Cont>
}

export default PestCan;