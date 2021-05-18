import React from 'react';
import styled from 'styled-components';
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


const Open = ({
  onClick = () => {}
}) => {
  return <Cont >
    <HiMenu onClick={onClick} size={40} color="white"></HiMenu>
  </Cont>
}

export default Open;