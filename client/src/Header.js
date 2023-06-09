import {useContext, useEffect} from "react";
import {UserContext} from "./UserContext";
import { Link } from "react-router-dom";

export default function Header() {
const {setUserInfo,userInfo} = useContext(UserContext);
useEffect(() => {
    fetch('http://localhost:4000/profile', {
    credentials: 'include',
    }).then(response => {
    response.json().then(userInfo => {
        setUserInfo(userInfo);
    });
    });
}, [setUserInfo]);

function logout() {
    fetch('http://localhost:4000/logout', {
    credentials: 'include',
    method: 'POST',
    });
    setUserInfo(null);
}

const username = userInfo?.username;

return (
    <header>
    <Link to="/" className="logo">ChainChronicles</Link>
    <nav>
        {username && (
        <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
        </>
        )}
        {!username && (
        <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
        )}
    </nav>
    </header>
);
}