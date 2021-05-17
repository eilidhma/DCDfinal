import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc';


const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:5vw;
  min-width:50px;
  background:${props => props.background};
  border:2px solid #FFFFFF;
  border-radius:15px;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:0.8rem;
  display:flex;
  align-items:center;
  text-align:center;
  color:${props => props.color};
  position:relative;
  top:${props => props.top};
  left:${props => props.left};
`;


const Back = ({
  text = "Back",
  background = "#FFFFFF33",
  color = "white",
  onClick = () => {},
  top="-45px",
  left="30"
}) => {
  return <Button top={top} left={left} onClick={onClick} color={color} background={background}>{text}</Button>
}

export default Back;
