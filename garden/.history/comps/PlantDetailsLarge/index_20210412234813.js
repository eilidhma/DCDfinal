import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const MediumTitles = styled.h3`
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
  color:#367A17;
  -webkit-text-stroke-width:1px;
  -webkit-text-stroke-color: #FFF;
  text-shadow: 2px 2px 2px #367A17;
  font-size: 46px;
`;

const MedTitles = ({
text = "Placeholder"
}) => {
  return <MediumTitles>{text}</MediumTitles>
}

export default MedTitles;