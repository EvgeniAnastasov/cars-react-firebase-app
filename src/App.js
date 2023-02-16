import './App.css';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header'
import { Login } from './Components/Login';
import { Register } from './Components/Register'
import { CarAdd } from './Components/CarAdd';
import { Home } from './Components/Home';
import { CarEdit } from './Components/CarEdit';
import { CarDelete } from './Components/CarDelete';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { CarDetails } from './Components/CarDetails';
import { AuthContextProvider } from './context/AuthContext';
import { RequireAuth } from './Components/RequreAuth';

function App() {
    return (

        <AuthContextProvider>

            <Router>
                <Header />

                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/add' element={<RequireAuth><CarAdd /></RequireAuth>} />
                    <Route path='/details/:carId' element={<RequireAuth><CarDetails /></RequireAuth>} />
                    <Route path='/' element={< Home />} />
                    <Route path='/edit/:carId' element={<RequireAuth><CarEdit /></RequireAuth>} />
                    <Route path='/delete/:carId' element={<RequireAuth><CarDelete /></RequireAuth>} />

                </Routes>

                <Footer />
            </Router>

        </AuthContextProvider>
    );
}

export default App;
