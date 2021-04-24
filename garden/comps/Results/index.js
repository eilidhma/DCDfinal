// import React from 'react';
import styled from 'styled-components';
import PlantDetailsLarge from '../PlantDetailsLarge';
import React, { useState } from 'react';
import { CgBee } from 'react-icons/cg';

const Cont = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  height: ${props => props.height}px;
  width:5em;
  min-width: 450px;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
  padding:20px;
  margin:30px;
  overflow:hidden;
  transition: height 0.5s;
`;

const DescriptionCont = styled.div`
  display:flex;
  position:relative;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
  height: 250px;
  padding-bottom: 10px;
`;

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-basis:1;
  width:100%;
  height:100%;
`;

const Img = styled.img`
  display:flex;
  object-fit:cover;
  height:50%;
  padding:20px;
  border: 4px solid white;
  border-radius:15px;
`;

const Points = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  flex-basis:2;
  text-align:left;
`;

const Title = styled.h4`
  color:white;
  font-size:24px;
  line-height:0;
`;

const Item = styled.p`
  color:white;
  font-family: 'Montserrat', sans-serif;
  font-size:16px;
  text-align:left;
  line-height: 1px;
`;

const Button = styled.button`
  display:flex;
  position:relative;
  justify-content:center;
  align-items:center;
  width:300px;
  background:#FFFFFF33;
  border:4px solid #FFFFFF;
  border-radius:15px;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:18px;
  display:flex;
  align-items:center;
  text-align:center;
  color:white;
  margin: 0px 0px 20px 0px;
`;

const DetailsCont = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
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
  top:60px;
  z-index:2;
  left: 89%;
  box-shadow: 0 4px 4px 0 rgba(000,000,000,0.50);
`;


const Options = ({
  title = "English Lavender",
  src = "lavendar.png",
  climate = " arid",
  goodIn = " pots/planters",
  category = " flowers",
  maintenance = " moderate",
  learn = "Learn more",
  sun = "Requires ",
  // sunIcon = "../../public/sun.png",
  water = "Water every ",
  fact = "Fun fact!",

}) => {
  const [open, setOpen] = useState(false);

  var height = 250, text = "Learn more"
  if (open) {
    height = 540;
    text = "Hide";
  }

  return <BeeCont>
    <BeeBadge><CgBee className="BeeBadge" /></BeeBadge>
    <Cont height={height}>
      <DescriptionCont>
        <ImgCont><Img src={src} /></ImgCont>
        <Points>
          <Title>{title}</Title>
          <Item><strong>Climate:</strong> {climate}</Item>
          <Item><strong>Good in:</strong> {goodIn}</Item>
          <Item><strong>Category:</strong> {category}</Item>
          <Item><strong>Maintenance:</strong> {maintenance}</Item>
        </Points>
      </DescriptionCont>
      <Button onClick={() => setOpen(!open)}>{text}</Button>
      <DetailsCont>
        <PlantDetailsLarge src='sun.png' text={sun + "moderate sunlight"} />
        <PlantDetailsLarge src='water.png' text={water + "3 days"} />
        <PlantDetailsLarge src='globe.png' text={fact} />
      </DetailsCont>

    </Cont>
  </BeeCont>
}

export default Options;