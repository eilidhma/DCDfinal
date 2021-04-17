import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  width: 80%;
  text-align:center;
  flex-direction:column;
  justify-content:center;
`;

const TitleContent = styled.h3`
  display:flex
  font-weight:600;
  color:black;
`;

const TextContent = styled.h3`
  display:flex;
  font-weight:400;
  color:black;
`;


const LandingInfo = ({
titleText = "Placeholder title"
bodyText = "Placeholder"
}) => {
  return <Cont>
    <TitleContent>{titleText}</TitleContent>
  </Cont>
}

export default LandingInfo;