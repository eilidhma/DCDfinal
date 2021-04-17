import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:70%;
  height:60px;
  background:${props=>props.background};
  border:2px solid #FFFFFF;
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
  padding:40px;
`;

const subtext = styled.p`
  display:flex;
  justify-content:center;
  align-items:center;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:12px;
  text-align:center;
  color:${props=>props.};
`;


const QuestionButton = ({
text="placeholder",
subtext="placeholdersub",
routeTo="/home",
background="#FFFFFF33",
color="white",
onClick=()=>{},
onHover=()=>{}
}) => {
  return <Button onHover={onHover} onClick={onClick} color={color} background={background}>{text}</Button>
}

export default QuestionButton;
