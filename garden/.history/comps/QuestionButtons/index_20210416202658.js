import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  height:70px;
  background:${props=>props.background};
  border-width:2px;
  border-style:solid;
  border-color:${props=>props.color};
  border-radius:15px;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:20px;
  line-height:29px;
  display:flex;
  align-items:center;
  text-align:center;
  color:${props=>props.color};
  margin:20px;
`;


const QuestionButton = ({
  text="placeholder",
  background="#FFFFFF33",
  color="white",
  borderColor="#FFFFFF"
  onClick=()=>{},
  onHover=()=>{}
  }) => {
    return <Button onHover={onHover} onClick={onClick} color={color} background={background} borderColor={}>{text}</Button>
}

export default QuestionButton;
