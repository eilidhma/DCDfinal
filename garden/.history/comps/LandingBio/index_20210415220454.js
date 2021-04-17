import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  flex-direction:column;
  justify-content:center;
  font-size:20px;
  padding-left:40px;
  padding-right:40px;
`;

const TitleContent = styled.h3`
  display:flex
  font-weight:600;
  color:#FFF;
`;

const TextContent = styled.h3`
  display:flex;
  font-weight:400;
  color:#FFF;
`;


const LandingInfo = ({
titleText = "Placeholder title",
bodyText = "Placeholder body text"
}) => {
  return <Cont>
    <TitleContent>{titleText}</TitleContent>
    <TextContent>{bodyText}</TextContent>
  </Cont>
}

export default LandingInfo;