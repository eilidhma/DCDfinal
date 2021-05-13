import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width:80vw;
`;

const Can = styled.img`
  position: relative;
  width:30vw;
  left: -25vw;
  top: 5vh;
  transform: rotate(${props=>props.rotate}deg);
  transition: transform .8s ease-in-out;
`;

const Drop = styled.img`
  position: relative;
  width: 10vw;
  left: -5vw;
  top:7vw;
  opacity:${props=>props.opacity};
  transition: opacity 2s;
  transform:rotate(-30deg);
`;

const PlantCont = styled.div`
  display: flex;
  align-items: flex-end;
  justy-content: center;
  margin-top: 5vh;
`;

const Small = styled.img`
  position: relative;
  width: 24vw;
  left: 27vw;
  opacity:${props=>props.opacity};
  transition: opacity 2s;
  transition-delay: 2s;
`;
const Big = styled.img`
  position: relative;
  width: 30vw;
  left: 0vw;
  opacity:${props=>props.opacity};
  transition: opacity 2s;
  transition-delay: 1s;
`;

const Watering = ({
  onClick=()=>{},
  opacitySmall=1,
  opacityBig=0,
  opacityDrop=0,
  rotate=0,
  onMouseLeave=()=>{}
  }) => {
    return <Cont >
      <Can onMouseLeave={onMouseLeave} onClick={onClick} src="watering-can.svg" rotate={rotate}></Can>
      <Drop src="drop.svg" opacity={opacityDrop}></Drop>
      <PlantCont>
        <Small src="small.svg" opacity={opacitySmall}></Small>
        <Big src="big.svg" opacity={opacityBig}></Big>
      </PlantCont>
    </Cont>
  }
  
  export default Watering;


