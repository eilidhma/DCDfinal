import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const ImgCont = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  margin-bottom:-50px;
  object-fit:contain;
`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:contain;
  margin-bottom:0;
`;


const HeroImg = ({
src="../../public/clouds.svg"
}) => {
  return <ImgCont>
    <Img src={src}/>
  </ImgCont>
}

export default HeroImg;