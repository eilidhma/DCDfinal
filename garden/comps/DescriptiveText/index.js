import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.h3`
  display:flex;
  flex-direction:column;
  text-align:center;
  flex-direction:column;
  justify-content:center;
  font-size:1.2rem;
  font-weight:600;
  color:#FFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin:30px;
  opacity:${props=>props.opacity}
`;


const Description = ({
text = "Placeholder",
opacity=1
}) => {
  return <Cont opacity={opacity}>
    {text}
  </Cont>
}

export default Description;
