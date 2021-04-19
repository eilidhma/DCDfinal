import React from 'react';
import styled from 'styled-components';
import PlantDetailsLarge from '../PlantDetailsLarge';


const Cont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80%;
  height: ${props => props.height};
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
  padding:20px;
  margin:30px;
  object-fit:cover;
`;

const DescriptionCont = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:100%;
`;

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-basis:1;
  width:100%;
  height:100%;
  object-fit:cover;
`;

const Img = styled.img`
  display:flex;
  object-fit:cover;
  width:60%;
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
`;

const Item = styled.p`
  color:white;
  font-family: 'Montserrat', sans-serif;
  font-size:16px;
  text-align:left;
`;

const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:60%;
  height:40px;
  background:#FFFFFF33;
  border:6px solid #FFFFFF;
  border-radius:15px;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:18px;
  display:flex;
  align-items:center;
  text-align:center;
  color:white;
  margin:20px;
`;

function Details() {
  height = 1000 + "px"
};




const Options = ({
  height = 500 + "px",
  title = "English Lavender",
  src = "lavendar.png",
  text = "placeholder",
  climate = "arid",
  goodIn = "pots/planters",
  category = "flowers",
  maintenance = " moderate",
  learn = " Learn more"
}) => {
  return <Cont height={height}>
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
    <Button onClick={Details}>{learn}</Button>
    <PlantDetailsLarge />
  </Cont>
}

export default Options;