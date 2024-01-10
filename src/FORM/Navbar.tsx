import React from 'react'
import { useNavigate } from 'react-router-dom'
function Navbar() {

    const navigate = useNavigate();

    const onclickLogin = () => {
        navigate('/login')
    }
    const onclickSignUp = () => {
        navigate('/Signup')
    }
    const OnclickTable = () => {
        navigate('/Table')
    }

    return (
        <div className='  bg-blue-700 align-middle text-end h-10'>
            <button onClick={OnclickTable} className='mx-10 font-bold hover:bg-blue-600 my-1.5'>TABLE</button>
            <button onClick={onclickLogin} className='mx-6 hover:bg-blue-600  font-bold'>LOGIN</button>
            <button onClick={onclickSignUp} className=' mx-10 hover:bg-blue-600 font-bold ' >SIGNUP</button>

        </div>
    )
}

export default Navbar;