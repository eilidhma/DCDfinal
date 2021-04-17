import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Bar = styled.div`
  display:flex;
  height:25px;
  width:25px;
  border-radius:15px;
  border:none;
  background-color:white;
  opacity:1;
`;

const PercentComplete = ({
  width="20%"
  }) => {
    return <Bar width={width}>
    </div>
  }
  
  export default PercentComplete;