import { useNavigate, useParams, useLocation } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase'

export const CarDelete = () => {

    let navigate = useNavigate();
    let { carId } = useParams();

    const location = useLocation()
    const carToDelete = location.state;

    const onDelete = () => {
        const docRef = doc(db, 'cars', carId)

        deleteDoc(docRef)
            .then(() => {
                console.log("Document has been deleted successfully.")
            })
            .catch(error => {
                console.log(error);
            })

        navigate('/')
    }

    return (
        <section className="editPage">

            <fieldset>
                <legend>Delete Car</legend>
                <div className="container">

                    <h2>Are You Sure You Want To Delete :</h2>
                    <h2>{carToDelete.CarBrand} {carToDelete.CarModel}</h2>

                    <div className="actionBtn">
                        <button className="deletebtn" type="submit" onClick={onDelete}>Delete Car</button>
                        <button className="deletebtn" type="submit" onClick={() => navigate(`/details/${carId}`)}>Cancel</button>
                    </div>

                </div>
            </fieldset>

        </section>
    )
}