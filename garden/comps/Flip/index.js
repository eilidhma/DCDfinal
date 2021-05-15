// import React from 'react';
import styled from 'styled-components';
import PlantDetailsLarge from '../PlantDetailsLarge';
import React, { useState } from 'react';
import Options from '../Results';

const Card = styled.div`
margin: 100px auto 0;
width: 400px;
height: 600px;
perspective: 1000px;
`;

const Inside = styled.div`
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
`;

const Front = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0px 3px 18px 3px rgba(0,0,0,0.2);

    background-image: linear-gradient(to bottom right, var(--primary), var(--secondary));
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Back = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 16px;
    box-shadow: 0px 3px 18px 3px rgba(0,0,0,0.2);

     background-color: var(--light);
    transform: rotateY(180deg);
`;

const Content = styled.div`

`;

const Description = styled.div`

`;

const Header = styled.div`

`;

const Body = styled.div`

`;


const Flip = ({


}) => {
    // const [open, setOpen] = useState(false);

    // var height = 300, text = "Learn more"
    // if (open) {
    //     height = 600;
    //     text = "Hide";
    // }

    return <Card className="card">
        <Inside className="card__inner">
            <Front className="card__face card__face--front">
                <img src="https://placekitten.com/100/100" />
            </Front>
            <Back className="card__face card__face--back">
                <Content>
                    <Description className="card__content">
                        <Header className="card__header"></Header>
                        <Body className="body"></Body>
                    </Description>
                </Content>
            </Back>
        </Inside>

    </Card>
}

export default Flip;