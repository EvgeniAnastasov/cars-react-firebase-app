import './Login.css'

export const Login = () => {
    return (
        <section className='login'>
            <form>
                <fieldset>
                    <legend>Login</legend>

                    <input htmlFor="email" className="email" name="email" type="text" placeholder="Email" />
                    <input id="password" className="password" name="password" type="password" placeholder="Password" />

                    <button type="submit" className="loginbtn">Login</button>

                    <p>
                        <span className='additional'>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
    )
}