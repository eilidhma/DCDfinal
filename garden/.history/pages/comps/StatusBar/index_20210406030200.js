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

const StatusBar = ({
percent="10%"
}) => {
  <Sta>
    <div>
      <div></div>
    </div>
    <p>{percent}</p>
  </div>
}

export default StatusBar;