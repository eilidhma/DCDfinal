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
  font-family: 'Montserrat', sans-serif;
  font-size:20px;
`;

const Wrap = ({
src="wrap_closed.png",
text="Click the wrap!",
}) => {
  return <Cont>
    <Img src={src}></Img>
    <ClickMe>{text}</ClickMe>
  </Cont>
}

export default Wrap;

