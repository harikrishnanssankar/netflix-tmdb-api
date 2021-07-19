import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";
const Nav = () => {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavbar = () => {
        if (window.scrollY > 70) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, []);
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <div className="nav__contentsRight">
                    <img onClick={() => history.push("/")} className="nav__logo"
                        src="images/logo.png"
                        alt="img"
                    />
                    <span onClick={() => history.push("/")}>Home</span>
                </div>
                <img onClick={() => history.push("/profile")} className="nav__avatar"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="img"
                />
            </div>

        </div>
    );
}

export default Nav;