import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:45vw;
max-width:250px;
margin-top:280px;
`;

const Soil = () => {
    return <Cont>
        <div id="soil"></div>
    </Cont>
}

export default Soil;