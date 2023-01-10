import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useState } from 'react'
import './AddCar.css'
import { Navigate, useNavigate } from 'react-router-dom'
// import firebase from 'firebase'

export const AddCar = () => {
    const [carBrand, setCarBrand] = useState('')
    const [carModel, setCarModel] = useState('')
    const [hp, setHp] = useState('')
    const [year, setYear] = useState('')
    const [type, setType] = useState('')
    const [engine, setEngine] = useState('')
    const [transmission, settransmission] = useState('')

    let navigate = useNavigate();

    const onAdd = (e) => {
        e.preventDefault()

        addDoc(collection(db, 'cars'), {
            CarBrand: carBrand,
            CarModel: carModel,
            HP: hp,
            Year: year,
            Type: type,
            Engine: engine,
            Transmission: transmission,
            timestamp: serverTimestamp()
        });
        navigate('/')
    }


    return (
        <section className="createPage">
            <form onSubmit={onAdd}>
                <fieldset>
                    <legend>Add Car</legend>

                    <div className="container">
                        <input type="text" placeholder="Car Brand"
                            value={carBrand}
                            onChange={(e) => setCarBrand(e.target.value)}
                        />
                        <input type="text" placeholder="Car Model"
                            value={carModel}
                            onChange={(e) => setCarModel(e.target.value)}
                        />
                        <input type="text" placeholder="HP"
                            value={hp}
                            onChange={(e) => setHp(e.target.value)}
                        />
                        <input type="text" placeholder="Year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />

                        <label htmlFor='type'>Type: </label>
                        <select id='type'
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option>Sedan</option>
                            <option>Hatchback</option>
                            <option>Convertable</option>
                            <option>Sport car</option>
                            <option>Estate</option>
                            <option>SUV</option>
                            <option>VAN</option>
                            <option>Other</option>
                        </select>

                        <label htmlFor='engine'>Engine: </label>
                        <select id='engine'
                            value={engine}
                            onChange={(e) => setEngine(e.target.value)}
                        >
                            <option>Petrol</option>
                            <option>Diesel</option>
                            <option>EV</option>
                            <option>Hybrid</option>
                        </select>

                        <label htmlFor='transmission'>Transmission: </label>
                        <select id='transmission'
                            value={transmission}
                            onChange={(e) => settransmission(e.target.value)}
                        >
                            <option>Manual</option>
                            <option>Auto</option>
                        </select>


                        <button className="addbtn">Add Car</button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}