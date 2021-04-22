import styled from 'styled-components';
import MenuButton from '../MenuButton';
import {GiHamburgerMenu} from 'react-icons/gi';
import React, {useState} from 'react';

const Cont = styled.div`
    display:flex;
    flex-direction:column;
`;
const MenuIcon = styled.div`

`;
const MenuItems = styled.div`

`;


const Menu = ({


}) => {
    const [open, setOpen] = useState(false)
    return <Cont>
        <MenuIcon>
            <GiHamburgerMenu />
        </MenuIcon>
        <MenuItems>
            <MenuButton text="Home"></MenuButton>
            <MenuButton text="Why grow food at home?"></MenuButton>
            <MenuButton text="What plants should you grow?"></MenuButton>
        </MenuItems>
    </Cont>
}

export default Menu;