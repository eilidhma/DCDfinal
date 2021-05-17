import styled from 'styled-components';
import React, { useState } from 'react';


const BeeImg = styled.img`
  
`;

const BeeCont = styled.div`
  // so bee badge doesn't get cut off from overflow hidden :)
`;

const BeeBadge = styled.div`
  display: flex;
  width:50px;
  height:50px;
  border-radius:50%;
  background-color: white;
  position: relative;
  top:65px;
  z-index:2;
  left: 81%;
  box-shadow: 0 4px 4px 0 rgba(000,000,000,0.50);
`;

const BeeInfo = styled.div`
  width:10%;
  min-width: 120px;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
  font-size:0.9rem;
  color:white;
  text-align:center;
  position:relative;
  left: 73%;
  top: 55px;
  visibility: visible;
  `;

const BeeInfo = ({

}) => {
    const [bee, setBee] = useState(false);

    if (bee) {
        var beeInfo = document.getElementsByClassName("beeInfo");
        beeInfo.style.visibility = "hidden";
    }

    return <BeeCont>
        <BeeInfo className="beeInfo"><p>I support pollination!</p></BeeInfo>
        <BeeBadge><BeeImg src='../bee.png' className="BeeBadge" onClick={() => setBee(!bee)} /></BeeBadge>
    </BeeCont>
}

export default BeeInfo;