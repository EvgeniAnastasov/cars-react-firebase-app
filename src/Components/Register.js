

export const Register = () => {
    return (
        <section className="register">
            <form>
                <fieldset>
                    <legend>Register</legend>

                    <input id="email" className="email" name="email" type="text" placeholder="Email" />
                    <input id="password" className="password" name="password" type="password" placeholder="Password" />
                    <input id="conf-pass" className="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password" />

                    <button type="submit" className="registerbtn">Register</button>

                    <p>
                        <span className="additional">If you already have profile click <a href="/login">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
    )
}