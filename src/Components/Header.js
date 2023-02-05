import car2 from '../images/car2.jpg'
import '../main.css'

export const Header = () => {
    return (
        <header>
            <nav>
                <img src={car2} alt="car" />
                <a href="/">Home</a>
                <ul>

                    <li><a href="/add">Add Car</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Logout</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/login">Login</a></li>

                </ul>
            </nav>
        </header>
    )
}