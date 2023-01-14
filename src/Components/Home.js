import './Home.css'
import { useEffect, useState } from 'react'
import { query, collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { Car } from './Car'


export const Home = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'cars'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let carsArr = []
            querySnapshot.forEach((doc) => {
                carsArr.push({ ...doc.data(), id: doc.id })
            });
            setCars(carsArr)
        })
        return () => unsubscribe()

    }, [])


    return (
        <section id="catalogPage">

            {cars.length < 1 ? <p>No Cars Available!</p> : <h1>All Cars</h1>}

            {cars.map((car, index) => (<Car key={index} car={car} />))}

        </section>
    )
}