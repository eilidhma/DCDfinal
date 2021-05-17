import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const MediumTitles = styled.h1`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:#FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-size: 40px;
  margin-top:${props=>props.marginTop};
  opacity:${props=>props.opacity};
`;

const MedTitles = ({
text = "Placeholder",
marginTop="",
opacity=1
}) => {
  return <MediumTitles opacity={opacity} marginTop={marginTop}>{text}</MediumTitles>
}

export default MedTitles;
