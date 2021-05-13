import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit:cover;
  width:20%;
  left:${props=>props.left}%;
  top:${props=>props.top}%;
  animation: smallbee 0.7s infinite alternate;
  position:relative;
  transition: left 2s, top 2s;
`;
const Img = styled.img`
  display:flex;
  object-fit:cover;
  width:100%;
  opacity:${props=>props.opacity};
  transition: opacity 2s;
`;



const PestBee = ({
left=0,
top=0,
onClick=()=>{},
opacity="0.2"
}) => {
  return <Cont left={left} top={top} className="smallbee">
    <Img opacity={opacity} src="smallbee.png"></Img>
  </Cont>
}

export default PestBee;