import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  width:100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(#5AA2D7, #);
`;


const Background = ({
color1 = "#5AA2D7",
color2 = "#9fbdd3"
}) => {
  return <Cont>
  </Cont>
}

export default Background;