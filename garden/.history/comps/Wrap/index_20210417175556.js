import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img`

`;

const Wrap({

}) {
  return `
    <div style="
      width: 90%;
      height: 90%;
    ">
      <img style="
        
        "
        onclick='WrapUI.HandleClick(this)'
        ondblclick='WrapUI.HandleDblClick(this)'
        src="./images/wrap_closed.png" alt="wrap closed">
    </div>
  `
}

export default Wrap;

WrapUI.HandleClick = (el) => {

  el.src="wrap_open.png"

}

WrapUI.HandleDblClick = (el) => {

  el.src="wrap_closed.png"

}