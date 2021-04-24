import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding-left:50px;
  padding-right:50px;
  margin:
`;

const TextContent = styled.h3`
  display:flex;
  text-align:left;
  color:#FFF;
  font-size: 20px;
  flex:3;
`;

const IconCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:50px;
  height:50px;
  flex:1;
  margin-right: 10px;
`;

const Icon = styled.img`
  display:flex;
  width:${props=>props.width}px;
  object-fit:contain;
`;


const PlantDetailsLarge = ({
  text = "placeholder",
  src = "../../public/sun.png",
  width = 50

}) => {
  return <Cont>
    <IconCont>
      <Icon src={src} width={width}></Icon>
    </IconCont>
    <TextContent>{text}</TextContent>
  </Cont>
}

export default PlantDetailsLarge;