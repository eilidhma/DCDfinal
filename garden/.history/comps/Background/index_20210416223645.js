import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(#5AA2D7, #9fbdd3);
`;


const Background = ({
color1 = "#5AA2D7",

}) => {
  return <Cont>
    {text}
  </Cont>
}

export default Background;