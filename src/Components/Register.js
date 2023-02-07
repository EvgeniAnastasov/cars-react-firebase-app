import { useState } from "react"
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from "react-router-dom"

export const Register = () => {

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('')

    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const onRegister = async (e) => {
        e.preventDefault()

        if (registerPassword !== registerConfirmPassword) {
            return alert('passwords do not match')
        }

        try {
            await createUser(registerEmail, registerPassword)
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
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
                </fieldset>
            </form>
        </section>
    )
}