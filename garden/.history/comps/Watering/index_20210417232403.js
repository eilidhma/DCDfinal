import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width:80%;
`;

const Can = styled.img`
  position: relative;
  width: 150px;
  left: 220px;
  top: 50px;
  transform: rotate(0deg);
  transition: transform .8s ease-in-out;
`;

const PlantCont = styled.div`
display: flex;
align-items: flex-end;
justy-content: center;
margin-top: 50px;
`;

const Watering = ({
  src="wrap_closed.png",
  text="Click the wrap!",
  onClick={},
  opacity=1
  }) => {
    return <Cont onClick={onClick}>
      <Img opacity={opacity} src={src}></Img>
    </Cont>
  }
  
  export default Watering;


   
      
      <div id="plants" style="
        display: flex;
        align-items: flex-end;
        justy-content: center;
        margin-top: 50px;
      ">
        <img id="small" src="./images/dirt.png" style="
          position: relative;
          width: 100px;
          left: 150px;
          opacity: 1;
          transition: opacity 2s;
          transition-delay: 2s;
        ">
        <img id="large" src="./images/large.png" style="
          position: relative;
          width: 150px;
          left: 16px;
          opacity: 0;
          transition: opacity 2s;
          transition-delay: 1s;
        ">
      </div>
    </div>
  `
}


// waterUI.HandleClick = (el) => {
//   el.style.transform = "rotate(-80deg)";
//   document.querySelector("#small").style.opacity = "0"
//   document.querySelector("#large").style.opacity = "1";
// }

// waterUI.HandleMouseOut = (el) => {
//   el.style.transform = "rotate(0deg)";
//   document.querySelector("#end").style.opacity = "1"
//   document.querySelector("#happy").style.opacity = "1"

// }