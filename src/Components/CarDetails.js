import { Link, useParams } from 'react-router-dom';
import './CarDetails.css'
import { useEffect, useState } from 'react'
import { query, collection, onSnapshot, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { async } from '@firebase/util';
import * as firestore from "firebase/firestore";

export const CarDetails = ({ car }) => {

    let { carId } = useParams();

    const [currentCar, setCurrentCar] = useState([])


    useEffect(() => {

        const getData = async () => {

            const ref = doc(db, 'cars', carId)

            const snap = await getDoc(ref)

            setCurrentCar(snap.data())

        }

        getData()

    }, [])


    return (
        <section id="detailsPage">
            <div className="wrapper">
                <div className="albumCover">
                    <img src={currentCar.ImageUrl} />
                </div>
                <div className="albumInfo">
                    <div className="albumText">

                        <h1>Car Brand: {currentCar.CarBrand}</h1>
                        <h3>Car model: {currentCar.CarModel}</h3>
                        <h4>HP: {currentCar.HP}</h4>
                        <h4>Year: {currentCar.Year}</h4>
                        <h4>Type: {currentCar.Type}</h4>
                        <h4>Engine: {currentCar.Engine}</h4>
                        <h4>Transmission: {currentCar.Transmission}</h4>

                    </div>

                    <div className="actionBtn">
                        <Link to={`/edit/${carId}`} className="edit">Edit</Link>
                        <a href="#" className="remove">Delete</a>
                    </div>
                </div>
            </div>
        </section>
    )
}