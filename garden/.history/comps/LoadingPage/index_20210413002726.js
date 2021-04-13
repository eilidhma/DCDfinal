import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const LoadingCont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding:20px;
  background-color:#367A17;
  width:100%;
  height:100px;
  color:white;
`;
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}


const Loading = ({
percent="10%",
width="10%"
}) => {
  return <StatusBarCont>
    <BarBackground>
      <Bar width={width}></Bar>
    </BarBackground>
    <Percent>{percent}</Percent>
  </StatusBarCont>
}

export default Loading;