import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Card = styled.div`
  display:flex;
  flex-direction:column;
  height:500px;
  width:80%;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,0,0.1);
`;

const OptionsCard = ({}) => {
    return <Card></Card>
  }
  
  export default OptionsCard;