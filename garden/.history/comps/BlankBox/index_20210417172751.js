import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80%;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
  padding:20px;
  margin:30px;
`;

const Options = ({
  title="English Lavender",
  src="lavendar.png",
  text="placeholder",
  onClick=()=>{},
  climate="arid",
  goodIn="pots/planters",
  category="flowers",
  maintenance=" moderate",
  learn=" Learn more"
  }) => {
  return <Cont>
    </Cont>
  }

export default Options;