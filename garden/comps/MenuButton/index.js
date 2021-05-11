import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {VscArrowRight, VscArrowLeft} from 'react-icons/vsc';

const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  max-width:225px;
  background:${props=>props.background};
  border:2px solid #FFF;
  border-radius:15px;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:18px;
  display:flex;
  align-items:center;
  text-align:center;
  color:${props=>props.color};
  padding:10px;
  margin:10px;
`;


const MenuButton = ({
text="placeholder",
background="#FFFFFF33",
color="white",
onClick=()=>{},
onHover=()=>{}
}) => {
  return <Button onHover={onHover} onClick={onClick} color={color} background={background}>{text}</Button>
}

export default MenuButton;
