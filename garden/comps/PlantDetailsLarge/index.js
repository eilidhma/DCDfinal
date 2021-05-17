import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding-right:10%;
  padding-left:10%;
  margin:5px;
`;

const TextContent = styled.h3`
  display:flex;
  text-align:left;
  color:#FFF;
  font-size: 0.9rem;
  flex:3;
  padding-left:20%;
`;

const IconCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:20%;
  flex:1;
`;

const Icon = styled.img`
  display:flex;
  width:${props => props.width}px;
  object-fit:contain;
`;


const PlantDetailsLarge = ({
  text = "placeholder",
  src = "../public/sun.png",
  width = 30

}) => {
  return <Cont>
    <IconCont>
      <Icon src={src} width={width}></Icon>
    </IconCont>
    <TextContent>{text}</TextContent>
  </Cont>
}

export default PlantDetailsLarge;