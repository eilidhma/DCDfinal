import styled from 'styled-components';
import React, { useState } from 'react';

const BeeCont = styled.div`
  position:relative;
`;

const BeeImg = styled.img`
object-fit:cover;
margin: 8%;

`;

const BeeBadge = styled.div`
  display: flex;
  width:50px;
  height:50px;
  border-radius:50%;
  background-color: white;
  position: relative;
  top:110px;
  left:-9em;
  z-index:2;
  box-shadow: 0 4px 4px 0 rgba(000,000,000,0.50);
`;

const BeeText = styled.div`
  width:10%;
  min-width: 120px;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
  font-size:0.9rem;
  color:white;
  text-align:center;
  position:relative;
  left: 50%;
  top: 55px;
  visibility: visible;
  `;

const BeeInfo = ({

}) => {
  const [bee, setBee] = useState(false);


  return <BeeCont>
    {/* <BeeText className="beeInfo"><p>I support pollination!</p></BeeText> */}
    <BeeBadge><BeeImg src='../beefriend.png' /></BeeBadge>
  </BeeCont>
}

export default BeeInfo;