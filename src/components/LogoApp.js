import React from 'react';
import ImgLogo from './images/LogoApp.png';
import './styles/LogoApp.css';

const LogoApp = () => {
    return(
        <div className='logo'>
            <a href='#'><img src={ImgLogo}></img></a>
        </div>
    )
}

export default LogoApp;