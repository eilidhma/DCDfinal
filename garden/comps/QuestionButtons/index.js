import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:70vw;
  background:${props=>props.background};
  border-width:2px;
  border-style:solid;
  border-color:${props=>props.borderColor};
  border-radius:15px;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:1rem;
  line-height:29px;
  display:flex;
  align-items:center;
  text-align:center;
  color:${props=>props.color};
  margin-top:10px;
  margin-bottom:10px;
`;


const QuestionButton = ({
  text="placeholder",
  background="#FFFFFF33",
  color="white",
  borderColor="#FFFFFF",
  onClick=()=>{}
  }) => {
    return <Button onClick={onClick} color={color} background={background} borderColor={borderColor}>{text}</Button>
}

export default QuestionButton;
