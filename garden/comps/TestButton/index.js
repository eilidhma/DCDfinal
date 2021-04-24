import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';


const ButtonCont = styled.span`
    margin: 5px;
`;
const ButtonInput = styled.button`
background-color: ${props => props.background};
color: #FFF;
padding: 10px;
border-radius: 5px;
border: none;
`;

const ButtonImg = styled.img`
width: 5px;
height: auto;
object-fit: contain;
`;
//props
const Button = ({
    text = "Text Button",
    bgcolor = "#afcf68",
    routeTo = "/home",
    onClick = () => { }
}) => {

    const router = useRouter();

    // () => router.push(routeTo)
    return <ButtonCont onClick={onClick}>
        {/* <button style={{
            backgroundColor:"#Afcf6B",
            color: "#fff"
            }}>Test Button</button> */}
        {/* <ButtonImg src="/vercel.svg" /> */}
        <ButtonInput background={bgcolor}>
            {text}
        </ButtonInput>
    </ButtonCont>
}

export default Button;
