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
  margin:30px;
`;


const SmallDescription = ({
text = "Placeholder",

}) => {
  return <Cont>
    {text}
  </Cont>
}

export default SmallDescription;
