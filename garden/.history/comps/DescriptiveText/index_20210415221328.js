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
`;


const Description = ({
text = "Placeholder",

}) => {
  return <Cont>
    {text}
  </Cont>
}

export default LandingInfo;

Let’s learn the benefits of growing your own food & how you can start yourself!