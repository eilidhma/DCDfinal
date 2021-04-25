import styled from 'styled-components';
import MenuButton from '../MenuButton';
import {GiHamburgerMenu} from 'react-icons/gi';
import React, {useState} from 'react';

const Cont = styled.div`
    
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
`;


const Menu = ({
    color="#FFF"

}) => {
    const [open, setOpen] = useState(false);

    var width=0, height=0;
    if(open){
        width=225;
        height=100;
    }
    return <Cont>
        <MenuIcon color={color} onClick={()=>setOpen(!open)}>
            <GiHamburgerMenu size={40}/>
        </MenuIcon>
        <MenuItems width={width} height={height}>
            <MenuButton text="Home"></MenuButton>
            <MenuButton text="Why grow food at home?"></MenuButton>
            <MenuButton text="What plants should you grow?"></MenuButton>
        </MenuItems>
    </Cont>
}

export default Menu;