import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  
`;


const Clock = ({
text = "Placeholder",

}) => {
  return <Cont>
    {text}
  </Cont>
}

export default Clock;
