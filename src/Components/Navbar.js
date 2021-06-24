import React, { useRef } from 'react';
import { VscThreeBars } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navTogglerRef = useRef()
    const handleToggler = () => {
        const navbar = navTogglerRef.current;
        navbar.classList.toggle( 'nav-active' );
    }

    return (
        <header>
            <nav className="navbar">
                <div className="nav-wrapper">
                    <button className="navbar-toggler" onClick={() => { handleToggler() }}>
                        <VscThreeBars />
                    </button>
                </div>
                <ul className="nav" ref={navTogglerRef}>
                    <li className="nav-item" onClick={() => { handleToggler() }}>
                        <Link className="nav-link btn" to="/">اضافه کردن فیلم</Link>
                    </li>
                    <li className="nav-item" onClick={() => { handleToggler() }}>
                        <Link className="nav-link" to="/watchlist">لیست فیلم ها</Link>
                    </li>
                    <li className="nav-item" onClick={() => { handleToggler() }}>
                        <Link className="nav-link" to="/watched">دیده شده ها</Link>
                    </li>
                </ul>

                <div className="logo-wrapper">
                    <Link className="logo" to="/">MovieCheck</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
