import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  object-fit:cover;
`;
const Img = styled.img`
  display:flex;
  object-fit:cover;
  width:40%;
`;
const ClickMe = styled.p`
  display:flex;
  font-family:
`;

const Wrap = ({
src="wrap_closed.png"
}) => {
  return <Cont>
    <Img src={src}></Img>
  </Cont>
}

export default Wrap;

