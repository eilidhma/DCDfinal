import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import styled from 'styled-components';
class AppContainer extends Component {
    render() {
        return (
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        );
    }
}