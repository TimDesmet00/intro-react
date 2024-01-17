import React from "react";

export const Input = React.forwardRef (({ type, name, id, label }, ref) => {
    return (
        <div>
            <div className="label">
                <label htmlFor={id}>{label}</label>
            </div>
            <div className="input">
                <input ref={ref} type={type} name={name} id={id} />
            </div>
        </div>
    );
});