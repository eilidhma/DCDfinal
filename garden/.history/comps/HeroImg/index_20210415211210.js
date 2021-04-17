import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const ImgCont = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:10%;
  object-fit:contain;
`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:contain;
`;


const LandingInfo = ({
src="../../public/clouds.svg"
}) => {
  return <ImgCont>
    <Img src=/>
  </ImgCont>
}

export default LandingInfo;