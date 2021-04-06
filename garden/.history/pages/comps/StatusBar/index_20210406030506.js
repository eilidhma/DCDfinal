import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const StatusBarCont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding:20px;
  background-color:#367A17;
  width:100%;
  height:100px;
`;

const Bar = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  background-color:white;
  opacity:0.3;
`

const Bar = styled.div`

`;

const StatusBar = ({
percent="10%"
}) => {
  <StatusBarCont>
    <Bar>
      <div></div>
    </Bar>
    <p>{percent}</p>
  </StatusBarCont>
}

export default StatusBar;