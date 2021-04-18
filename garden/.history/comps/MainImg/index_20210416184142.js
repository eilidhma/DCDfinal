import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:${props=>props.width}%;
  object-fit:contain;
`;

const Img = styled.img`
  display:flex;
  width:1%;
  object-fit:contain;
`;


const MainImg = ({
src="../../logo-white.png",
width=50
}) => {
  return <ImgCont>
    <Img src={src} width={width}/>
  </ImgCont>
}

export default MainImg;