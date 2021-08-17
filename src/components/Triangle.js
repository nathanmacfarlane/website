import * as React from "react";
import '../styles/Triangle.scss';

export const Triangle = () => {
    return (
        <svg className="triangle-svg" width="10px" viewBox="0 0 10 10" >
            <polygon points="0,0 0,10 10,5"/>
        </svg>
    )
}