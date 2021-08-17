import * as React from "react";

export const FullHeight = ({ children, minHeight = "75vh", paddingBottom  = "0px", paddingTop = "0px" }) => {
    return (
        <div style={{ minHeight, paddingBottom, paddingTop }}>
            {children}
        </div>
    )
}