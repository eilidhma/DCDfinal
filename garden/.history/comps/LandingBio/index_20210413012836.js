import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  width: 100%;
  text-align:center;
  flex-direction:column;
  justify-content:center;
  font-size:20px;
  margin-left:20%;
  margin-right:20%;
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
titleText = "Placeholder title",
bodyText = "Placeholder body text"
}) => {
  return <Cont>
    <TitleContent>{titleText}</TitleContent>
    <TextContent>{bodyText}</TextContent>
  </Cont>
}

export default LandingInfo;