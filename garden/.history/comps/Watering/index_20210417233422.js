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
  transform: rotate(${props=>props.rotate}deg);
  transition: transform .8s ease-in-out;
`;

const PlantCont = styled.div`
  display: flex;
  align-items: flex-end;
  justy-content: center;
  margin-top: 50px;
`;

const Small = styled.img`
  position: relative;
  width: 100px;
  left: 150px;
  opacity:${props=>props.opacitySmall};
  transition: opacity 2s;
  transition-delay: 2s;
`;
const Big = styled.img`
  position: relative;
  width: 150px;
  left: 16px;
  opacity:${props=>props.opacityBig};
  transition: opacity 2s;
  transition-delay: 1s;
`;

const Watering = ({
  onClick={},
  opacitySmall=1,
  opacityBig=0,
  rotate=0
  }) => {
    return <Cont onClick={onClick}>
      <Can src="watercan.png" rotate={rotate}></Can>
      <PlantCont>
        <Small src="dirt.png" opacity={opacitySmall}></Small>
        <Big src="large.png" opacity></Big>
      </PlantCont>
    </Cont>
  }
  
  export default Watering;


{/* // waterUI.HandleClick = (el) => { */}
{/* //   el.style.transform = "rotate(-80deg)";
//   document.querySelector("#small").style.opacity = "0"
//   document.querySelector("#large").style.opacity = "1";
// }

// waterUI.HandleMouseOut = (el) => { */}
{/* //   el.style.transform = "rotate(0deg)";
//   document.querySelector("#end").style.opacity = "1"
//   document.querySelector("#happy").style.opacity = "1"

// } */}