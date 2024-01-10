import React from 'react'

type buttonProps = {
    label: string,
    disabled: boolean
    onClick: () => void
    className: string
}
function ButtonLayout({ label, disabled, className }: buttonProps) {
    return (
        <div>
            <button onClick={() => { }}
                disabled={false}
                className={className}
                onClickCapture={() => { }}>
                {label}
            </button>

        </div>
    )
}

export default ButtonLayout