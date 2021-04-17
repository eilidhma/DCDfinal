import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const ImgCont = styled.div`
  display:flex;
  flex-direction:column;
  width:60%;
  object-fit:contain;
`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:contain;
`;


const MainImg = ({
src="../../logo-white.png"
}) => {
  return <ImgCont>
    <Img src={src}/>
  </ImgCont>
}

export default MainImg;