import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const TextContent = styled.h3`
  display:flex;
  text-align:left;
  color:#FFF;
  font-size: 20px;
`;

const IconCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  object0-fit:cover;
  width:50px;
  height:50px;
`;

constIcon = styled.img`
  width:50
`;

const MedTitles = ({
text = "Placeholder"
}) => {
  return <MediumTitles>{text}</MediumTitles>
}

export default MedTitles;