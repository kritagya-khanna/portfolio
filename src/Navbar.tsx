import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="nav-container">
            <div className="kk-logo"></div>
            <nav className="navigator">
                <ul className="navi">
                    <li>HOME</li>
                    <li>ABOUT ME</li>
                    <li>MY WORK</li>
                    <li>CONTACT ME</li>
                </ul>
            </nav>
            <div className="theme">A</div>
        </div>
    );
};

export default Navbar;

