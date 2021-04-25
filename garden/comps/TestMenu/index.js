import styled from 'styled-components';
import Button from '../TestButton';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import { CgMenuHotdog } from 'react-icons/cg';
import { GiStrawberry, GiPineapple } from 'react-icons/gi'
import React, { useState } from 'react';

const MenuCont = styled.div`
     
`;

const MenuIcon = styled.div`

`;

const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${props => props.width}px;
    max-height: ${props => props.height}px;
    overflow: hidden;
    transition:max-width 0.5s, max-height 0.5s;
`;

const Menu = ({
    onStrawClick = () => { },
    onPineClick = () => { },
}) => {
    const [open, setOpen] = useState(false);

    var width = 0, height = 0;
    if (open) {
        width = 120;
        height = 100;
    }

    return <MenuCont>
        <MenuIcon onClick={() => setOpen(!open)}>
            <CgMenuHotdog />
        </MenuIcon>
        <MenuItems width={width} height={height}>
            <Button
                text={<div><GiStrawberry />Strawberry</div>}
                bgcolor="Red"
                onClick={onStrawClick}
            />
            <Button
                text={<div><GiPineapple />Pineapple</div>}
                bgcolor="#ffe12d"
                onClick={onPineClick}
            />
        </MenuItems>
    </MenuCont>
}

export default Menu;