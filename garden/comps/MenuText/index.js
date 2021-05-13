import React from 'react';
import styled from 'styled-components';

const Cont = styled.h3`
  display:flex;
  flex-direction:column;
  text-align:center;
  flex-direction:column;
  justify-content:center;
  font-size:1rem;
  font-weight:200;
  color:#FFF;
`;


const MenuText = ({
text = "Placeholder",

}) => {
  return <Cont>
    {text}
  </Cont>
}

export default MenuText;