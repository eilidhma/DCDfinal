// import React from 'react';
import styled from 'styled-components';
import PlantDetailsLarge from '../PlantDetailsLarge';
import React, { useState } from 'react';


const Cont = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  align-items:center;
  height:${props => props.height}px;
  opacity:${props => props.opacity};
  width:70%;
  // min-width: 210px;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
  padding:10px;
  margin:50px;
  overflow:hidden;
  transition:height 0.5s, opacity 0.5s;
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
  opacity=${props => props.opacity}
`;

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-basis:1;
  width:50%;
  height:50%;
  opacity=${props => props.opacity}
`;

const Img = styled.img`
  display:flex;
  object-fit:cover;
  height:100%;
  padding:15px;
  top: 10px;
  position:relative;
  opacity=${props => props.opacity}
`;

const Points = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  flex-basis:2;
  text-align:left;
  opacity=${props => props.opacity}
`;

const Title = styled.h4`
  color:white;
  font-size:24px;
  opacity=${props => props.opacity}
  line-height:0;
`;

const Item = styled.p`
  color:white;
  font-family: 'Montserrat', sans-serif;
  font-size:0.9rem;
  text-align:left;
  line-height: 1px;
  opacity=${props => props.opacity}
`;

const Button = styled.button`
  display:flex;
  position:relative;
  justify-content:center;
  align-items:center;
  width:300px;
  background:#FFFFFF33;
  border:3px solid #FFFFFF;
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
  opacity=${props => props.opacity}
`;

const DetailsCont = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  opacity=${props => props.opacity}
`;


const CloseCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:50px;
  height:50px;
  border-radius:50%;
  object-fit:cover;
  opacity:${props => props.opacity};
  position:relative;
  top:10px;
  left:10px;
  position:absolute;
  z-index:5;
`;

const Close = styled.img`
  display:flex;
  width:100%;
  opacity:${props => props.opacity};
`;


const Options = ({
  onClickClose = () => { },
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
  opacity = 0,
  zindex = "1"
}) => {
  const [open, setOpen] = useState(false);

  var height = 290, text = "Learn more"
  if (open) {
    height = 550;
    text = "Hide";
  }



  return <Cont height={height}>
    <DescriptionCont>
      <ImgCont><Img src={src} /></ImgCont>
      <Points>
        <Title>{title}</Title>
        <Item><strong>Climate: </strong>{climate}</Item>
        <Item><strong>Good in: </strong>{goodIn}</Item>
        <Item><strong>Category: </strong>{category}</Item>
        <Item><strong>Maintenance: </strong> {maintenance}</Item>
      </Points>
    </DescriptionCont>
    <Button onClick={() => setOpen(!open)}>{text}</Button>
    <DetailsCont>
      <PlantDetailsLarge src='../sun.png' text={sun} />
      <PlantDetailsLarge src='../water.png' text={water} />
      <PlantDetailsLarge src='../globe.png' text={fact} />
    </DetailsCont>

  </Cont>

}

export default Options;