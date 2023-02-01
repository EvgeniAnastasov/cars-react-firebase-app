import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'


export const CarEdit = () => {

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

    console.log(currentCar);


    return (
        <h2>Hello</h2>
    )
}