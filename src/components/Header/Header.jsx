import React from 'react';
import './header.css';
const Header = (props) => {
    return ( 
        <div className="container">
            <div className="header-image">
                <img 
                    className={`header-image ${props.headerExpanded ? 'header-image-expanded' : 'header-image-contracted'}`} 
                    src ="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="Header"/>
            </div>
            <h1 className={`header-text ${props.headerExpanded ? 'header-text-expanded' : 'header-text-contracted'}`}>
                {props.title}
            </h1>
        </div>
    )
}

export default Header;