import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Signin } from "../Mui-Signin/Signin";
import "./NavBar.css";

export const NavBar = () => {
    const navigate = useNavigate();
    const [loginClicked, setLoginClicked] = useState<string>("Login");

    const handleNavigate = (path: string) => {
        navigate(path);
    }

    const clickedLogin = () => {
        if(loginClicked === 'Login') {
            handleNavigate('/login');
            setLoginClicked("Logout");
        } else {
            setLoginClicked("Login");
            handleNavigate('/');
        }
    }

    return <>
        <div className="containerNavbar">
            <div className="navbar">
                <span className="loginBtn" onClick={() => clickedLogin()}>{loginClicked}</span>
                <h2 className="title">Shop Market</h2>
            </div>
            {loginClicked === 'Logout' ? <Signin /> : null}
        </div>
    </>
} 