import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  flex-direction:column;
  justify-content:center;

`;


const Background = ({
text = "Placeholder",

}) => {
  return <Cont>
    {text}
  </Cont>
}

export default Background;