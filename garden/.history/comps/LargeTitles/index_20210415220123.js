import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const TitleCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80%;
`

const Title = styled.h1`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:#FFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-size: 36px;
  font-family:'Montserrat', sans-serif;
`;

const LargeTitles = ({
text = "Placeholder"
}) => {
  return <TitleCont>{text}</TitleCont>
}

export default LargeTitles;

