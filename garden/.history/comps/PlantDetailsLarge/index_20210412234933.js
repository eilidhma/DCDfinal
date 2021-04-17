import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const MediumTitles = styled.h3`
  display:flex;
  flex-direction:column;
  text-align:left;
  color:#FFF;
  font-size: 20px;
`;

const MedTitles = ({
text = "Placeholder"
}) => {
  return <MediumTitles>{text}</MediumTitles>
}

export default MedTitles;