import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  width:60%;
  background:rgba(255, 255, 255, 0.2);
  border:2px solid #FFFFFF;
  border-radius:15px;
  font-family:Montserrat;
  font-style:normal;
  font-weight:bold;
  font-size:24px;
  line-height:29px;
  display:flex;
  align-items:center;
  text-align:center;
  color: #FFFFFF;
`;


const MainButton = ({
text="placeholder"
}) => {
  return <Button>{text}</Button>
}

export default MainButton;



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

