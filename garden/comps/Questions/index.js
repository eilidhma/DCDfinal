import React, { useState } from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.h3`
  display:flex;
  flex-direction:column;
  text-align:center;
  flex-direction:column;
  justify-content:center;
  font-size:1.3rem;
  font-weight:600;
  color:#FFF;
`;


const Question = ({
text = "Placeholder",

}) => {

  return <Cont>
    {text}
  </Cont>
}

export default Question;