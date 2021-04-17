import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const LoadingCont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  padding:20px;
  width:200px;
  height:200px;
  border:5px solid rgba(54,122,23,0.2);
  border-top: 5px solid rgba(54,122,23,0.2);
  border-radius: 50%;
  animation: spin 2s linear infinite;
`;

const Loading


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