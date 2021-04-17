import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:10%;
  object-fit:contain;
`;

const TitleContent = styled.img`
  display:flex;
  width:100%;
  object-fit:contain;
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