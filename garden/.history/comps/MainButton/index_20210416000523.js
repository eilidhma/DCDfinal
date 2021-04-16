import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:60%;
  height:60px;
  background-color:${props=>props.bgcolor};
  opacity:${props=>props.opacity}
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
  color: ;
  margin:20px;
  padding:40px;
`;


const MainButton = ({
text="placeholder",
routeTo="/home",
bgcolor="white",
opacity="0.2",
onClick=()=>{},
onHover=()=>{}
}) => {
  return <Button onHover={onHover} onClick={onClick} backgroundColor={bgcolor} opacity={opacity}>{text}</Button>
}

export default MainButton;
