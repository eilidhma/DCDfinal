import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background:${props=>props.background};
`;


const Background = ({
background = "linear-gradient(#5AA2D7, #77BBE8, #FFCF00)"
}) => {
  return <Cont background={background}>
  </Cont>
}

export default Background;