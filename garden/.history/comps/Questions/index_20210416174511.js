import React, { useState } from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.h3`
  display:flex;
  flex-direction:column;
  text-align:center;
  flex-direction:column;
  justify-content:center;
  font-size:24px;
  font-weight:600;
  color:#FFF;
  padding-left:40px;
  padding-right:40px;
  margin:30px;
`;


const Question = ({
text = "Placeholder",

}) => {

  // const [question, setQuestion] = useState(0);

  // if(question === 1){
  //   setQuestion(1)
  // }
  // if(question === 2){
  //   setQuestion(2)
  // }
  // if(question === 3){
  //   setQuestion(3)
  // }


  return <Cont>
    {text}
  </Cont>
}

export default Question;