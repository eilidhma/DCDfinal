import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display:flex;
  justify-content:center;
  align-items:center;
  width:70%;
  background:${props=>props.background};
  border:2px solid #FFFFFF;
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
  margin-top:20px;
  margin-bottom:20px;
`;


const NameInput = ({
text="placeholder",
background="#FFFFFF33",
color="white",
onClick=()=>{},
onKeyUp=()=>{},
onChange=()=>{},
value=value
}) => {
  return <Input onChange={onChange} onKeyUp={onKeyUp} color={color} background={background} placeholder="Type your name here..." type="text">{value}</Input>
}

export default NameInput;
