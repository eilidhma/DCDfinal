import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
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

const Subtext = styled.p`
  display:flex;
  justify-content:center;
  align-items:center;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:12px;
  text-align:center;
  margin-top:-5px;
  color:${props=>props.fontcolor};
`;


const QuestionButton = ({
text="placeholder",
subtext="placeholdersub",
background="#FFFFFF33",
color="white",
fontcolor="white",
onClick=()=>{},
onHover=()=>{}
}) => {
  return <Button onHover={onHover} onClick={onClick} color={color} background={background}>
    {text}
    <Subtext color={fontcolor}>{subtext}</Subtext>
    </Button>
}

export default QuestionButton;
