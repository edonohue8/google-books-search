import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg justify-content-between">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google Books Search</h2>
            </a>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Search Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;