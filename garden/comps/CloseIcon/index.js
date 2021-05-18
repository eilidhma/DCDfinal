import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenu} from 'react-icons/hi'


const Cont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top:5px;
  right:12px;
  z-index:5;
`;


const Close = ({
  onClick = () => {}
}) => {
  return <Cont onClick={onClick}>
    <AiOutlineClose onClick={onClick} size={40} color="white"></AiOutlineClose>
  </Cont>
}

export default Close