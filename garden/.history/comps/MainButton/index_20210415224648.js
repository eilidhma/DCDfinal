import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:60%;
  height:60px;
  background:rgba(255, 255, 255, 0.2);
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
  color: #FFFFFF;
  margin:20px;
  padding:40px;
`;


const MainButton = ({
text="placeholder",
routeTo="/home",
onClick=()=>{}
}) => {
  return <Button>{text}</Button>
}

export default MainButton;
