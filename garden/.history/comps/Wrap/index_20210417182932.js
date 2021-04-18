import React, {useState} from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  object-fit:cover;
`;
const Img = styled.img`
  display:flex;
  object-fit:cover;
  width:40%;
`;
const ClickMe = styled.p`
  display:flex;
  font-family: 'Montserrat', sans-serif;
  font-size:20px;
  color:white;
  font-weight:600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;



function handleWrap(){
  const [wrap, setWrap] = useState(false)
  setWrap(!wrap)
  if(wrap === true){
    Img.src = "wrap_open.png"
  } else {
    Img.src = "wrap_"
  }
}

const Wrap = ({
src="wrap_closed.png",
text="Click the wrap!",
}) => {
  return <Cont onClick={handleWrap}>
    <Img src={src}></Img>
    <ClickMe>{text}</ClickMe>
  </Cont>
}

export default Wrap;

