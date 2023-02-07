import '../main.css'

import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const { signIn } = UserAuth();
    const navigate = useNavigate();

    const onLogin = async (e) => {
        e.preventDefault()

        const { email, password, } = Object.fromEntries(new FormData(e.target))

        try {
            await signIn(email, password)
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <section className='login'>

            <form onSubmit={onLogin}>
                <fieldset>
                    <legend>Login</legend>

                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />

                    <button type="submit" className="loginbtn">Login</button>

                    <p>
                        <span className='additional'>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
    )
}