import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { db } from '../firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";


export const CarEdit = () => {

    let { carId } = useParams();
    let navigate = useNavigate();

    const [carBrand, setCarBrand] = useState('');
    const [carModel, setCarModel] = useState('');
    const [hp, setHp] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');
    const [engine, setEngine] = useState('');
    const [transmission, setTransmission] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    useEffect(() => {
        const getData = async () => {
            const ref = doc(db, 'cars', carId)
            const snap = await getDoc(ref)

            setCarBrand(snap.data().CarBrand)
            setCarModel(snap.data().CarModel)
            setHp(snap.data().HP)
            setYear(snap.data().Year)
            setType(snap.data().Type)
            setEngine(snap.data().Engine)
            setTransmission(snap.data().Transmission)
            setImgUrl(snap.data().ImageUrl)
        }
        getData()
    }, [])

    const onEdit = (e) => {
        e.preventDefault();

        const docRef = doc(db, 'cars', carId)

        updateDoc(docRef, {
            CarBrand: carBrand,
            CarModel: carModel,
            HP: hp,
            Year: year,
            Type: type,
            Engine: engine,
            Transmission: transmission,
            ImageUrl: imgUrl,
        })
        
        navigate(`/details/${carId}`)
    }

    return (
        <section className="createPage">
            <form onSubmit={onEdit}>
                <fieldset>
                    <legend>Edit Car</legend>

                    <div className="container">
                        <input type="text" placeholder="Car Brand"
                            defaultValue={carBrand}
                            onChange={(e) => setCarBrand(e.target.value)}
                        />
                        <input type="text" placeholder="Car Model"
                            defaultValue={carModel}
                            onChange={(e) => setCarModel(e.target.value)}
                        />
                        <input type="text" placeholder="HP"
                            defaultValue={hp}
                            onChange={(e) => setHp(e.target.value)}
                        />
                        <input type="text" placeholder="Year"
                            defaultValue={year}
                            onChange={(e) => setYear(e.target.value)}
                        />

                        <label htmlFor='type'>Type: </label>
                        <select id='type'
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option >-- select an option --</option>
                            <option>Sedan</option>
                            <option>Hatchback</option>
                            <option>Convertable</option>
                            <option>Sport Car</option>
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
                            onChange={(e) => setTransmission(e.target.value)}
                        >
                            <option>Manual</option>
                            <option>Auto</option>
                        </select>

                        <input type="text" placeholder="Car Image URL"
                            defaultValue={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}
                        />

                        <button className="addbtn">Edit Car</button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}