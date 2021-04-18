import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:row;
`;

const TextContent = styled.h3`
  display:flex;
  text-align:left;
  color:#FFF;
  font-size: 20px;
`;

const IconCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:50px;
  height:50px;
`;

const Icon = styled.img`
  width:50;
  height:50;
  object-fit:contain;
`;

const PlantDetailsLarge = ({
  text="placeholder",
  src="../public/sun.png"
}) => {
  return <Cont>
    <IconCont>
      <Icon src={src}></Icon>
    </IconCont>
    <TextContent>{text}</TextContent>
  </Cont>
}

export default PlantDetailsLarge;