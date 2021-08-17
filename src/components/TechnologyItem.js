import * as React from "react";
// import { Triangle } from "./Triangle";
import { Icon } from "./Icon";

export const TechnologyItem = ({ text }) => {
    return (
        <div style={{ display: "flex", padding: "3px 0px" }}>
            <Icon type="dot" />
            <p className="mono" style={{ paddingLeft: 10, margin: 0, fontSize: "1.2em" }}>
                {text}
            </p>
        </div>
    );
}