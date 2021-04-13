import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const MediumTitles = styled.h3`
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
  color:#367A17;
  font-size: 20px;
`;

const MedTitles = ({
text = "Placeholder"
}) => {
  return <MediumTitles>{text}</MediumTitles>
}

export default MedTitles;