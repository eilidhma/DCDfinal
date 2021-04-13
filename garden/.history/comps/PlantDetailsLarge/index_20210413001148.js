import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding-left:50px;
  padding-left:50px;
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
  display:flex;
  width:50px;
  height:50px;
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