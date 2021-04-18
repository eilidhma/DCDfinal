import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const StatusBarCont = styled.div`
  justify-content:center;
    align-items:center;
    padding:10px;
`;

const StatusBar = ({
percent="10%"
}) => {
  <div>
    <div>
      <div></div>
    </div>
    <p>{percent}</p>
  </div>
}

export default StatusBar;