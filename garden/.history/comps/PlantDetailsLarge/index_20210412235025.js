import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const TextContent = styled.h3`
  display:flex;
  text-align:left;
  color:#FFF;
  font-size: 20px;
`;

const Icon = styled.div`

`

const MedTitles = ({
text = "Placeholder"
}) => {
  return <MediumTitles>{text}</MediumTitles>
}

export default MedTitles;