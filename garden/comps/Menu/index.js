import styled from 'styled-components';
import MenuButton from '../MenuButton';
import {GiHamburgerMenu} from 'react-icons/gi';
import React, {useState} from 'react';
import {Router, useRouter} from 'next/router'

const Cont = styled.div`
    position: absolute;
    left:5px;
    top:5px;
    z-index:5;
`;
const MenuIcon = styled.div`
    color:${props=>props.color};
`;
const MenuItems = styled.div`
    display:flex;
    flex-direction:column;
    max-width:${props=>props.width};
    max-height:${props=>props.height};
    overflow:hidden;
    transition:max-width 0.5s, max-height 0.5s;
    position:absolute;
    border-radius:15px;
    background-color:rgba(67,128,40,0.85);
`;



const Menu = ({
    router = useRouter(),
    color="#FFF",
    onClick1=()=>{router.push('/')},
    onClick2=()=>{router.push('/info')},
    onClick3=()=>{router.push('/quiz/question1')},

}) => {
    
    return <Cont>
        <MenuIcon color={color} onClick={()=>setOpen(!open)}>
            <GiHamburgerMenu size={40}/>
        </MenuIcon>
        <MenuItems width={width} height={height}>
            <MenuButton onClick={onClick1} text="Home"></MenuButton>
            <MenuButton onClick={onClick2} text="Learn"></MenuButton>
            <MenuButton onClick={onClick3} text="Quiz"></MenuButton>
        </MenuItems>
    </Cont>
}

export default Menu;