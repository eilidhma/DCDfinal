import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(45deg, #5AA2D7, #9fbdd3);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

`;


const Background = ({
text = "Placeholder",

}) => {
  return <Cont>
    {text}
  </Cont>
}

export default Background;