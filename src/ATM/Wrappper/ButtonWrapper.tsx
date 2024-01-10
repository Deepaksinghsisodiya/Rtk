import React from 'react'
import ButtonLayout from '../Layout/ButtonLayout'

function ButtonWrapper() {
    return (
        <div >
            <ButtonLayout
                className=' bg-red-300 p-1 my-2'
                label='Submit'
                disabled={false}
                onClick={() => { }}
            />
        </div>
    )
}
export default ButtonWrapper