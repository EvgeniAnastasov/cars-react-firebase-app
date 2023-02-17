import { useNavigate, useParams, useLocation } from "react-router-dom";
import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase'
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";

export const CarDelete = () => {

    let navigate = useNavigate();
    let { carId } = useParams();
    const { user } = UserAuth();

    const [currentCar, setCurrentCar] = useState('')

    useEffect(() => {
        const getData = async () => {
            const ref = doc(db, 'cars', carId)
            const snap = await getDoc(ref)

            setCurrentCar(snap.data())
        }
        getData()
    }, [])

    // const location = useLocation()
    // const carToDelete = location.state;

    const onDelete = () => {

        if (user.uid !== currentCar.OwnerId) {
            return alert('Only owner is allowed to delete car!');
        }
        const docRef = doc(db, 'cars', carId)

        deleteDoc(docRef)
            .then(() => {
                console.log("Car has been deleted successfully.")
            })
            .catch(error => {
                console.log(error);
            })

        navigate('/')
    }

    return (
        <section className="deletePage">

            <fieldset>
                <legend>Delete Car</legend>
                <div className="container">

                    <h2>Are you sure you want to delete :</h2>
                    <h2>{currentCar.CarBrand} {currentCar.CarModel} ?</h2>

                    <div className="actionBtn">
                        <button className="deletebtn" type="submit" onClick={onDelete}>Delete Car</button>
                        <button className="deletebtn" type="submit" onClick={() => navigate(`/details/${carId}`)}>Cancel</button>
                    </div>

                </div>
            </fieldset>

        </section>
    )
}