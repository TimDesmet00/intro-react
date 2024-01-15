export const Input = ({ type, name, id, label }) => {
    return (
        <div>
            <div className="label">
                <label htmlFor={id}>{label}</label>
            </div>
            <div className="input">
                <input type={type} name={name} id={id} />
            </div>
        </div>
    );
};