import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80%;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
  padding:20px;
`;

const DescriptionCont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
`;

export default function Options(){
  return (
    <Cont></Cont>
  )
}