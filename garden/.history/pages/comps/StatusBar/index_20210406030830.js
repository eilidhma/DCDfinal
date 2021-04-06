import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const StatusBarCont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:flex-end;
  padding:20px;
  background-color:#367A17;
  width:100%;
  height:100px;
`;

const BarBackground = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  background-color:white;
  opacity:0.3;
  height:25px;
  width: 70%;
  border-radius:15px;
  border:none;
`;

const Bar = styled.div`
  height:25px;
  width: 70%;
  border-radius:15px;
  border:none;
`;

const StatusBar = ({
percent="10%"
}) => {
  <StatusBarCont>
    <BarBackground>
      <div></div>
    </BarBackground>
    <p>{percent}</p>
  </StatusBarCont>
}

export default StatusBar;