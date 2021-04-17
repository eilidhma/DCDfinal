import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
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

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex:1
  object-fit:contain;
`;

const Img = styled.img`
  display:flex;
  object-fit:contain;
  width:100%;
  flex:1
`;

const Points = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex:2;
  text-align:left;
`;

const Title = styled.h4`
  color:white;
  font-size:24px;
`;

const List = styled.p``;

export default function Options(){
  return (
    <Cont>

    </Cont>
  )
}