import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:${props=>props.width};
  height:${props=>props.height};
  max-width:${props=>props.maxWidth};
  object-fit:cover;
`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:cover;
`;


const MainImg = ({
src="../../logo-white.png",
width=40,
maxWidth="200px",
opacity=1
}) => {
  return <ImgCont opacity={opacity} width={width} maxWidth={maxWidth}>
    <Img src={src}/>
  </ImgCont>
}

export default MainImg;