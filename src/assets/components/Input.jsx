import React from "react";

export const Input = React.forwardRef (({ type, name, id }, ref) => {
    return (
        <div className="input">
            <input className="input-box" ref={ref} type={type} name={name} id={id} placeholder="New Todo" />
        </div>
    );
});