import { useState } from "react"


export const Register = () => {

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('')

    const onRegister = (e) => {
        e.preventDefault()
        console.log(registerEmail)
        console.log(registerPassword)
        console.log(registerConfirmPassword)

        if(registerPassword !== registerConfirmPassword) {
            alert('wrong')
        }
    }


    // const OnRegister = (e) => {
    //     e.preventDefault()
    //     // console.log('register')

    //     const { email, password, confpassword } = Object.fromEntries(new FormData(e.target))

    //     console.log(e.target.password.value) 

    //     // console.log(email, password, confpassword)
    // }

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

                    <p>
                        <span className="additional">If you already have profile click <a href="/login">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
    )
}