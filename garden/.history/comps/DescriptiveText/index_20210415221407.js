import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
  flex-direction:column;
  justify-content:center;
  font-size:20px;
  font-weight:600;
  color:#FFF;
  padding-left:40px;
  padding-right:40px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


const Description = ({
text = "Placeholder",

}) => {
  return <Cont>
    {text}
  </Cont>
}

export default Description;

Let’s learn the benefits of growing your own food & how you can start yourself!