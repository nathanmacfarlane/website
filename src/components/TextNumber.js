import * as React from "react";
import '../styles/NavBar.scss';

export const TextNumber = ({ num, text }) => (
    <h3 className="nav-item">
        <span className="nav-item-num">0{num}.</span> {text}
    </h3>
)