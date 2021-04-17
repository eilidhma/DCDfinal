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
  padding-left:200px;
  padding-right:200px;
`;

const TitleContent = styled.img`
  display:flex;
  width:100%;
  
`;




const LandingInfo = ({
src="../../public/clouds.svg"
}) => {
  return <Cont>
    <TitleContent>{titleText}</TitleContent>
    <TextContent>{bodyText}</TextContent>
  </Cont>
}

export default LandingInfo;