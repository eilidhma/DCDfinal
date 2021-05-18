// import React from 'react';
import styled from 'styled-components';
import PlantDetailsLarge from '../PlantDetailsLarge';
import React, { useState } from 'react';
import { CgBee } from 'react-icons/cg';

const Cont = styled.div`
  position:relative;
  top:0vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  height:${props => props.height}px;
  opacity:${props => props.opacity};
  width:40vw;
  min-width: 330px;
  max-width: 400px;
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
  opacity=${props => props.opacity};
  flex-basis:1;
`;

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-basis:1;
  width:50%;
  height:50%;
  opacity=${props => props.opacity};
  object-fit:cover;
`;

const Img = styled.img`
  display:flex;
  object-fit:cover;
  height:100%;
  padding:15px;
  top: 10px;
  position:relative;
  opacity=${props => props.opacity};
`;

const Points = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  flex-basis:2;
  text-align:left;
  opacity=${props => props.opacity};
`;

const Title = styled.h4`
  color:white;
  font-size:24px;
  opacity=${props => props.opacity};
  line-height:0;
`;

const ItemCont = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  opacity=${props => props.opacity};
  width:100%;
`;

const Item = styled.p`
  display:flex;
  justify-content:flex-end;
  color:white;
  font-family: 'Montserrat', sans-serif;
  font-size:0.9rem;
  text-align:right;
  line-height: 1px;
  opacity=${props => props.opacity};
  width:50%;
  margin-right:8px;
`;

const BoldItem = styled.p`
  color:white;
  font-family: 'Montserrat', sans-serif;
  font-size:0.9rem;
  text-align:left;
  line-height: 1px;
  font-weight:600;
  margin-right:1px; 
  opacity=${props => props.opacity};
  width:50%;
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
  opacity=${props => props.opacity};
`;

const DetailsCont = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  opacity=${props => props.opacity};
  flex-basis:2;
`;

const BeeImg = styled.img`
opacity=${props => props.opacity};
`;

const MainCont = styled.div`
  // so bee badge doesn't get cut off from overflow hidden :)
  opacity=${props => props.opacity};
`;

const CloseCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:35px;
  height:35px;
  border-radius:50%;
  object-fit:cover;
  opacity:${props => props.opacity};
  position:relative;
  top:10px;
  right:10px;
  position:absolute;
  z-index:5;
`;

const Close = styled.img`
  display:flex;
  width:100%;
  opacity:${props => props.opacity};
`;

const BeeBadge = styled.div`
  display:flex;
  width:50px;
  height:50px;
  border-radius:50%;
  background-color: white;
  position:relative;
  top:65px;
  z-index:2;
  left: 81%;
  box-shadow: 0 4px 4px 0 rgba(000,000,000,0.50);
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
    height = 520;
    text = "Hide";
  }

  return <MainCont opacity={opacity}>
    <Cont zindex={zindex} opacity={opacity} height={height}>
      <CloseCont onClick={onClickClose} opacity={opacity}>
        <Close opacity={opacity} src="../close.svg"></Close>
      </CloseCont>
      <DescriptionCont opacity={opacity}>
        <ImgCont><Img opacity={opacity} src={src} /></ImgCont>
        <Points opacity={opacity}>
          <Title>{title}</Title>
          <ItemCont>
            <BoldItem>Climate: </BoldItem>
            <Item>{climate}</Item>
          </ItemCont>
          <ItemCont>
            <BoldItem>Good In:</BoldItem>
            <Item>{goodIn}</Item>
          </ItemCont>
          <ItemCont>
            <BoldItem>Category: </BoldItem>
            <Item>{category}</Item>
          </ItemCont>
          <ItemCont>
            <BoldItem>Maintenance: </BoldItem>
            <Item>{maintenance}</Item>
          </ItemCont>
        </Points>
      </DescriptionCont>
      <Button onClick={() => setOpen(!open)}>{text}</Button>
      <DetailsCont>
        <PlantDetailsLarge src='../sun.svg' text={sun} />
        <PlantDetailsLarge src='../water.svg' text={water} />
        <PlantDetailsLarge src='../globe.svg' text={fact} />
      </DetailsCont>

    </Cont>
  </MainCont>
}

export default Options;