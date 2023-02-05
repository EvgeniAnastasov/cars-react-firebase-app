import '../main.css'

export const Login = () => {

    const onLogin = (e) => {
        e.preventDefault()
        console.log('login')

        const { email, password, } = Object.fromEntries(new FormData(e.target))
        console.log(email, password);
    }

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