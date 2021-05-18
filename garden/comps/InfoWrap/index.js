import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  width: 80vw;
  height: 100%;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  opacity:${props=>props.opacity};
`;



const InfoWrap = ({
opacity=1,
children=null
}) => {
  return <Cont opacity={opacity}>{children}</Cont>
}

export default InfoWrap;