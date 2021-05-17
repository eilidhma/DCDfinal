import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:60vw;
    max-width:250px;
`;

const Earth = () => {
    return <Cont>
        <div id="earth"></div>
    </Cont>
}

export default Earth;