import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const TitleCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
  padding-top:30px;
`

const Title = styled.h1`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:#FFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.8rem;
  font-family:'Montserrat', sans-serif;
  opacity:${props=>props.opacity};
`;

const LargeTitles = ({
text = "Placeholder",
opacity=1
}) => {
  return <TitleCont>
    <Title opacity={opacity}>{text}</Title>
  </TitleCont>
}

export default LargeTitles;

