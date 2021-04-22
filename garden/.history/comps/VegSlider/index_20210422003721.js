import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:center;
  padding:20px;
  background:#FFFFFF33;
  width:70%;
`;

const ImgCont = styled.div`
  display:flex;
  object-fit:cover;
  justify-content:center;
  align-items:center;
  text-align:left;
`;

const TextCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:left;
`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:cover;
`;

const Number = styled.h3`
  font-size:24px;
  color:white;
  text-shadow: 0px 4px 4px rgba(31, 71, 30, 0.75);
  font-family: 'Montserrat', sans-serif;
`;

const Text = styled.h4`
  font-size:20px;
  color:white;
  text-shadow: 0px 4px 4px rgba(31, 71, 30, 0.75);
  font-family: 'Montserrat', sans-serif;
`;


const VegSlider = ({
number="470,000",
text=""
}) => {
  return <Cont>
    <ImgCont>
    <Number>{number}</Number>
    </ImgCont>
    <TextCont>
      <Text>{text}</Text>
    </TextCont>
  </Cont>
}

export default VegSlider;