import '../main.css'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export const Login = () => {

    const onLogin = async (e) => {
        e.preventDefault()

        const { email, password, } = Object.fromEntries(new FormData(e.target))

        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
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