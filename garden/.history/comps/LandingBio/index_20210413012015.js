import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  width: 80%;
  text-align:center;
  font-weight:
`;

const TitleContent = styled.h3`

`;

const TextContent = styled.h3`

`;

const MediumTitles = styled.h1`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:#367A17;
  -webkit-text-stroke-width:1px;
  -webkit-text-stroke-color: #FFF;
  text-shadow: 2px 2px 2px #367A17;
  font-size: 46px;
`;

const LandingInfo = ({
text = "Placeholder"
}) => {
  return <MediumTitles>{text}</MediumTitles>
}

export default LandingInfo;