import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100vw;
max-width:500px;
position:relative;
// top:10vh;
padding-top:5vh;
`;

const RowCont= styled.div`
display:flex;
justify-content:center;
align-items:flex-end;
flex-direction:row;
width:100vw;
max-width:600px;
object-fit:cover;
`;

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:flex-end;
  flex-direction:row;
  width:31vw;
  max-width:500px;
  object-fit:cover;
`;

const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:cover;
`;

const Dirt = styled.div`
  display:flex;
  width:100vw;
  height:5vh;
  z-index:2;
  justify-content:center;
  align-items:center;
  position:relative;
  top:-3vh;
  background-color:#864019;
`;

const Garden = ({
src1="../../logo-white.png",
src2="../../logo-white.png",
src3="../../logo-white.png",
onClick1=()=>{},
onClick2=()=>{},
onClick3=()=>{},
}) => {
  return <Cont>
    <RowCont>
      <ImgCont>
        <Img onClick={onClick1} src={src1}></Img>
        <Img onClick={onClick2} src={src2}></Img>
        <Img onClick={onClick3} src={src3}></Img>
      </ImgCont>
    </RowCont>
    <Dirt></Dirt>
  </Cont>
    
}

export default Garden;