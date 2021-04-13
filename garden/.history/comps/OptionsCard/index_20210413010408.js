import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const CardCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;

const Card = styled.div`
  display:flex;
  flex-direction:column;
  height:500px;
  width:80%;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
`;

const OptionsCard = ({}) => {
    return <CardCont><Card></Card></CardCont>
  }
  
  export default OptionsCard;