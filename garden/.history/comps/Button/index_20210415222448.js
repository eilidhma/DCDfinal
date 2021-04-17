import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const ImgCont = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  width:60%;
  object-fit:contain;
`;

const Button = styled.img`
  display:flex;
  justify-content:center;
  align-items:center;
  width:70%;
  object-fit:contain;
`;


const Button = ({
text="placeholder"
}) => {
  return <ImgCont>
    <Img src={src}/>
  </ImgCont>
}

export default Button;

background: rgba(255, 255, 255, 0.2);
border: 2px solid #FFFFFF;
border-radius: 15px;


// function ButtonUI({
//   buttonWidth=345,
//   buttonHeight=60,
//   alignSelf="center",
//   margin20=20,
//   backgroundColorButton="rgb(148,212,108,1)",
//   border="2px solid rgb(148,212,108)",
//   value="Next question",
//   fontSize="36px",
//   fontWeight="regular",
//   fontColor="white"
// }){
//   return(
//       <input type="button" value={value} style={{
//           width:buttonWidth,
//           height:buttonHeight,
//           alignSelf:alignSelf,
//           margin:margin20,
//           backgroundColor:backgroundColorButton,
//           border:border,
//           fontSize:fontSize,
//           fontWeight:fontWeight,
//           fontColor:fontColor
//       }}/>
//   )
// }

export default ButtonUI;