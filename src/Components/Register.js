import { useState } from "react"
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from "react-router-dom"

export const Register = () => {

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('')

    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [errormessage, setErrrorMessage] = useState('') 

    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const onRegister = async (e) => {
        e.preventDefault()

        if (registerEmail.length == 0) {
            return setEmailError(true)
        }
        if (registerPassword.length === 0) {
            return setErrrorMessage('Plaese enter a valid password!')
        }
        if (registerPassword !== registerConfirmPassword) {
            return setErrrorMessage('Passwords do not match')
        }

        else if (registerPassword.length === 0) {
            return setErrrorMessage('Plaese enter a valid password!')
        }

        try {
            await createUser(registerEmail, registerPassword)
            navigate('/')
        } catch (error) {
            setErrrorMessage(error.message.substring(9))
            // alert(error.message)
            // console.log(error.message);
        }
    }

    // validateEmail

    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    const validateEmail = (e) => {
        if (registerEmail.length == 0 || !regEx.test(registerEmail)) {
            setEmailError(true)
        }
        else { setEmailError(false) }
    }


    return (
        <section className="register">
            <form onSubmit={onRegister}>
                <fieldset>
                    <legend>Register</legend>

                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => { setRegisterEmail(e.target.value) }}
                        onBlur={validateEmail}
                        value={registerEmail}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => { setRegisterPassword(e.target.value) }}
                        value={registerPassword}
                    />
                    <input
                        name="conf-pass"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={(e) => { setRegisterConfirmPassword(e.target.value) }}
                        value={registerConfirmPassword}
                    />

                    <button className="registerbtn">Register</button>

                    {/* <h2>{user?.email}</h2> */}

                    <p>
                        <span className="additional">If you already have profile click <a href="/login">here</a></span>
                    </p>
                    <p>
                        {emailError && <span className="error">Please enter a valid email!</span>}
                        
                        <span className="error">{errormessage}</span>
                    </p>
                    {/* <p>
                        {passwordError && <span className="error">Passwords do not match!</span>}
                    </p> */}
                </fieldset>
            </form>
        </section>
    )
}