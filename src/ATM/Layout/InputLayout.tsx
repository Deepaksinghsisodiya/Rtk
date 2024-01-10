import React from 'react'
export type InputProps = {
    placeholder: string,
    disabled: boolean,
    label: string
}
const InputLayout = ({ placeholder, disabled, label }: InputProps) => {
    return (
        <div>
            <div>{label}</div>
            <input
                type="text"
                placeholder={placeholder}
                disabled={disabled}
            />
        </div>
    );
};

export default InputLayout;