import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc';


const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  background:${props => props.background};
  border:5px solid #FFFFFF;
  border-radius:15px;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:1.3rem;
  line-height:30px;
  display:flex;
  align-items:center;
  text-align:center;
  color:${props => props.color};
  margin:20px;
`;


const MainButton = ({
  text = "placeholder",
  background = "#FFFFFF33",
  color = "white",
  onClick = () => {},
  onHover = () => {}
}) => {
  return <Button onHover={onHover} onClick={onClick} color={color} background={background}>{text}</Button>
}

export default MainButton;
