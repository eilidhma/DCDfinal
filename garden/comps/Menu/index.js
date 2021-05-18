import styled from 'styled-components';
import MenuButton from '../MenuButton';
import {GiHamburgerMenu} from 'react-icons/gi';
import React, {useState} from 'react';
import {Router, useRouter} from 'next/router'

const Cont = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw
    justify-content:center;
    align-items:center;
    position:fixed;
    top:25vw;
    right:${props=>props.right}%;
    transition:right 0.5s;
    opacity:${props=>props.opacity};
    z-index:5;
`;

const MenuItems = styled.div`
    display:flex;
    flex-direction:column;
    border-radius:15px;
    width:80vw;
`;

const Button = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    background:#FFFFFF33;
    border:2px solid #FFF;
    border-radius:15px;
    font-family:Montserrat;
    font-style:normal;
    font-weight:bold;
    font-size:1rem;
    display:flex;
    align-items:center;
    text-align:center;
    color:white;
    padding:5px;
    margin:10px;
    top:50%;
  `;



const Nav = ({
    router = useRouter(),
    color="#FFF",
    onClick1=()=>{router.push('/')},
    onClick2=()=>{router.push('/info')},
    onClick3=()=>{router.push('/quiz/question1')},
    right=-100,
    opacity=1

}) => {
    
    return <Cont opacity={opacity} right={right}>
        <MenuItems>
            <Button onClick={onClick1} text="Home">Home</Button>
            <Button onClick={onClick2} text="Learn">Learn</Button>
            <Button onClick={onClick3} text="Quiz">Quiz</Button>
        </MenuItems>
    </Cont>
}

export default Nav;