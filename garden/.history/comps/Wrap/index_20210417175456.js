import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`

`;

function WrapUI() {
  return `
    <div style="
      
    ">
      <img style="
        width: 90%;
        height: 90%;
        "
        onclick='WrapUI.HandleClick(this)'
        ondblclick='WrapUI.HandleDblClick(this)'
        src="./images/wrap_closed.png" alt="wrap closed">
    </div>
  `
}

WrapUI.HandleClick = (el) => {

  el.src="wrap_open.png"

}

WrapUI.HandleDblClick = (el) => {

  el.src="wrap_closed.png"

}