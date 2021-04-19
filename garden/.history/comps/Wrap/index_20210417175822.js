import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit:cover;
`;
const Img = styled.img`
  display:flex;
  object-fit:cover;
`;

const Wrap = ({
src
}) => {
  return <Cont onClick={}>
    <Img></Img>
  </Cont>
}

export default Wrap;

WrapUI.HandleClick = (el) => {

  el.src="wrap_open.png"

}

WrapUI.HandleDblClick = (el) => {

  el.src="wrap_closed.png"

}