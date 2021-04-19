import React from 'react';
import styled from 'styled-components';

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
 const Icon = styled.img


const MainButton = ({
text="placeholder",
background="#FFFFFF33",
color="white",
onClick=()=>{},
onHover=()=>{}
}) => {
  return <Button onHover={onHover} onClick={onClick} color={color} background={background}>{text}</Button>
}

export default MainButton;
