// AnotherComponent.tsx
import React from 'react';
import InputLayout from '../Layout/InputLayout';

const InputWrapper = () => {
    return (
        <div>
            <InputLayout
                label='Name'
                placeholder="Enter Your Name"
                disabled={false}
            />
        </div>
    );
};

export default InputWrapper;
