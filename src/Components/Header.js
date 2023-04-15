import car2 from '../images/car2.jpg'
import '../main.css'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export const Header = () => {

    const { user, logout } = UserAuth();

    let navigate = useNavigate();

    const onLogout = async () => {
        try {
            await logout()
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <header>
            <nav>
                <img src={car2} alt="car" />
                <a href="/">Home</a>
                <a href="/add">Add Car</a>
                
                <ul>

                    <li><a href="#">{user && user.email}</a></li>

                    {/* {user && <li><a href="#">Profile</a></li>} */}
                    {user && <li><a href="#" onClick={onLogout}>Logout</a></li>}
                    {!user && <li><a href="/register">Register</a></li>}
                    {!user && <li><a href="/login">Login</a></li>}


                </ul>
            </nav>
        </header>
    )
}