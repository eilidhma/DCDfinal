import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const LoadingCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:20px;
  background-clip: padding-box;
  width:200px;
  height:200px;
  border:5px solid rgba(54,122,23,0.2);
  border-top: 5px solid rgba(54,122,23,0.2);
  border-radius: 50%;
  animation: spin 2s linear infinite;
`;

const LoadingImg = styled.img`
  display:flex;
  object-fit:contain;
  width:170px;
  height:200px;
`;


const Loading = ({}) => {
  return <LoadingCont>
    <LoadingImg src="logo.png"></LoadingImg>
  </LoadingCont>
}

export default Loading;