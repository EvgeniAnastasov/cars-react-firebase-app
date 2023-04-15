import '../main.css'
import { useState } from "react"

import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const [emailError, setEmailError] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const { signIn } = UserAuth();
    const navigate = useNavigate();

    const onLogin = async (e) => {
        e.preventDefault()

        const { email, password, } = Object.fromEntries(new FormData(e.target))

        setEmailError(false)
        setPasswordError(false)

        if (email.length === 0) {
            return setEmailError(true)
        }

        if (password.length === 0) {
            return setPasswordError(true)
        }

        try {
            await signIn(email, password)
            navigate('/')
        } catch (error) {
            setLoginError(true)
            console.log(error.message);
        }
    };

    return (
        <section className='login'>

            <form onSubmit={onLogin}>
                <fieldset>
                    <legend>Login</legend>

                    <input
                        name="email"
                        type="email"
                        placeholder="Email" />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password" />

                    <button type="submit" className="loginbtn">Login</button>

                    <p>
                        <span className='additional'>If you don't have profile click <a href="/register">here</a></span>
                    </p>

                    <p>
                        {emailError && <span className="error">Please enter an email!</span>}
                        {passwordError && <span className="error">Please enter a password!</span>}

                        {loginError && <span className="error">Wrong email and/or password!</span>}
                    </p>

                </fieldset>
            </form>
        </section>
    )
}