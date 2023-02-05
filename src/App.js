import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header'
import { Login } from './Components/Login';
import { Register } from './Components/Register'
import { AddCar } from './Components/AddCar';
import { Home } from './Components/Home';
import { CarEdit } from './Components/CarEdit';
import { CarDelete } from './Components/CarDelete';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { CarDetails } from './Components/CarDetails';

function App() {
    return (

        <Router>
            <Header />

            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/add' element={<AddCar />} />
                <Route path='/details/:carId' element={<CarDetails />} />
                <Route path='/' element={< Home />} />
                <Route path='/edit/:carId' element={<CarEdit />} />
                <Route path='/delete/:carId' element={<CarDelete />} />

            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
