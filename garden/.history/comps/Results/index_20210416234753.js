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

const Item = styled.p`
  color:white;
  font-family: 'Montserrat', sans-serif;
  font-size:16px;
  font-weight:bold;
`;

const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
width:70%;
height:70px;
background:${props=>props.background};
border:6px solid #FFFFFF;
border-radius:15px;
font-family:Montserrat;
font-style:normal;
font-weight:bold;
font-size:24px;
line-height:29px;
display:flex;
align-items:center;
text-align:center;
color:${props=>props.color};
margin:20px;
`;

export default function Options(){
  return (
    <Cont>

    </Cont>
  )
}