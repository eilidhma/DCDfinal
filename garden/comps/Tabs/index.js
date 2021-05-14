import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {VscArrowRight, VscArrowLeft} from 'react-icons/vsc';

const Cont = styled.div`
  width:70vw;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
`;

const Tab = styled.button`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:25vw;
  max-width:200px;
  background:${props=>props.background};
  border:2px solid ${props=>props.borderColor};
  border-top:none;
  border-radius:0px 0px 15px 15px;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:1rem;
  display:flex;
  align-items:center;
  text-align:center;
  color:${props=>props.color};
  padding:2px;
`;

const ImgCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit:cover;
  width:10vw;
  
`;
const Img = styled.img`
  display:flex;
  object-fit:cover;
  width:100%;
  max-width:50px;
`;

const Title = styled.h3`
  font-size:0.85rem;
  margin:0;
  color:${props=>props.color};
`;


const Tabs = ({
src1="planet-earth.svg",
src2="dumbbell.svg",
src3="bee-icon.svg",
borderColor1="FFFFFF",
borderColor2="FFFFFF",
borderColor3="FFFFFF",
background1="#FFFFFF33",
background2="#FFFFFF33",
background3="#FFFFFF33",
color1="white",
color2="white",
color3="white",
onClick1=()=>{},
onClick2=()=>{},
onClick3=()=>{},
onHover1=()=>{},
onHover2=()=>{},
onHover3=()=>{}
}) => {

  return <Cont>
    <Tab onClick={onClick1} borderColor={borderColor1} color={color1} background={background1}>
      <ImgCont>
        <Img onHover={onHover1} src={src1}></Img>
      </ImgCont>
      <Title>Sustainability</Title>
    </Tab>
    <Tab onClick={onClick2} borderColor={borderColor2} color={color2} background={background2}>
    <ImgCont>
        <Img onHover={onHover2} src={src2}></Img>
      </ImgCont>
      <Title>Wellness</Title>
    </Tab>
    <Tab onClick={onClick3} borderColor={borderColor3} color={color3} background={background3}>
    <ImgCont>
        <Img onHover={onHover3} src={src3}></Img>
      </ImgCont>
      <Title>Bees</Title>
    </Tab>
  </Cont>
}

export default Tabs;
