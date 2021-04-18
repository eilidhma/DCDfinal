import React from 'react';
import styled from 'styled-components';

const Cont = styled.h3`
  display:flex;
  flex-direction:column;
  text-align:center;
  flex-direction:column;
  justify-content:center;
  font-size:18px;
  font-weight:600;
  color:#FFF;
  padding-left:40px;
  padding-right:40px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin:30px;
`;


const Description = ({
text = "Placeholder",

}) => {
  return <Cont>
    {text}
  </Cont>
}

export default Description;
