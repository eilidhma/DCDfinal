import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80%;
  border-radius:15px;
  border:3px solid white;
  background-color:rgba(255,255,255,0.1);
  padding:20px;
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
  object-fit:cover;
  border: 4px solid white;
  border-radius:15px;
`;

const Img = styled.img`
  display:flex;
  object-fit:cover;
  width:25%;
`;

const Points = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex:2;
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
  font-weight:bold;
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


const Options = ({
  title="title",
  src="lavendar.png",
  text="placeholder",
  onClick=()=>{},
  climate="arid",
  goodIn:"pots/planters",
  category:"flowers"
  }) => {
  return <Cont>
      <DescriptionCont>
        <ImgCont><Img src={src}/></ImgCont>
        <Points>
          <Title/>
          <Item/>
        </Points>
      </DescriptionCont>
      <Button/>
    </Cont>
  }

export default Options;