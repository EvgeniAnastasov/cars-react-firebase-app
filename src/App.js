import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header'
import { Login } from './Components/Login';
import { Register } from './Components/Register'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
    return (

        <Router>
            <Header />

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
