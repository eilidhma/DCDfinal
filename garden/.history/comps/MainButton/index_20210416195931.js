import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:70%;
  height:60px;
  background:${props=>props.background};
  border:3px solid #FFFFFF;
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
