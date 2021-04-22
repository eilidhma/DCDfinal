import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:center;
  padding:20px;
  background:#FFFFFF33;
  width:60%;
`;

const ImgCont = styled.div`
  display:flex;
  object-fit:cover;
  justify-content:left;
  align-items:center;
  text-align:left;
  flex:1;
`;

const TextCont = styled.div`
  display:flex;
  flex-direction:column;
  align-items:left;
  justify-content:center;
  text-align:left;
  flex:2;
`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:cover;
`;

const Number = styled.h3`
  font-size:24px;
  color:white;
  text-shadow: 0px 4px 4px rgba(31, 71, 30, 0.75);
  font-family: 'Montserrat', sans-serif;
  margin-left:20px;
  margin-bottom:5px;
`;

const Text = styled.h4`
  font-size:20px;
  color:white;
  text-shadow: 0px 4px 4px rgba(31, 71, 30, 0.75);
  font-family: 'Montserrat', sans-serif;
  margin-left:20px;
  margin-top:5px;
`;

const Next = styled.button`
display:flex;
justify-content:center;
align-items:center;
width:20%;
height:50px;
background:${props=>props.background};
border:6px solid #FFFFFF;
border-radius:15px;
font-family:Montserrat;
font-style:normal;
font-weight:bold;
font-size:24px;
display:flex;
align-items:center;
text-align:center;
color:"#FFFFFF33";
margin:5px;
`;


const VegSlider = ({
number="470,000",
text="Heads of lettuce",
src="lettuce.png"
}) => {
  return <Cont>
    <ImgCont>
    <Img src={src}></Img>
    </ImgCont>
    <TextCont>
      <Number>{number}</Number>
      <Text>{text}</Text>
    </TextCont>
    <Next>Next</Next>
  </Cont>
}

export default VegSlider;