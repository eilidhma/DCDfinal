import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Bar = styled.span`
  display:flex;
  height:25px;
  width:25px;
  border-radius:15px;
  border:none;
  background-color:white;
  opacity:1;
`;

const PercentComplete = ({
  percent="10%"
  }) => {
    return <StatusBarCont>
      <BarBackground>
      </BarBackground>
      <p>{percent}</p>
    </StatusBarCont>
  }
  
  export default StatusBar;