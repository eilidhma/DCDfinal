import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';

class AppContainer extends Component {
    render() {
        return (
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        );
    }
}