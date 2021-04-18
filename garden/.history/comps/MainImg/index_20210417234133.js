import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:${props=>props.width};
  max-width:500px;
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
opacity=1
}) => {
  return <ImgCont width={width}>
    <Img src={src}/>
  </ImgCont>
}

export default MainImg;