import React from 'react';
import styled from 'styled-components';
import {Router, useRouter} from 'next/router'

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:100px;
  max-width:200px;
  object-fit:cover;
  // position:absolute;
  // top:20px;
  left:20px;
`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:cover;
`;


const Logo = ({
  router = useRouter(),
  onClick=()=>{router.push('/')},
}) => {
  return <ImgCont onClick={onClick}>
    <Img src="logo-hands.png"/>
  </ImgCont>
}

export default Logo;
