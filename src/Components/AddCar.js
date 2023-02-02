import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useState } from 'react'
import './AddCar.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { storage } from '../firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'
// import firebase from 'firebase'

export const AddCar = () => {
    const [carBrand, setCarBrand] = useState('');
    const [carModel, setCarModel] = useState('');
    const [hp, setHp] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');
    const [engine, setEngine] = useState('');
    const [transmission, setTransmission] = useState('');
    // const [imgUpload, setImgUpload] = useState(null);
    const [imgUrl, setImgUrl] = useState('');

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
            ImageUrl: imgUrl,
            timestamp: serverTimestamp()
        });

        // const imageRef = ref(storage, `images/${imgUpload.name + v4()}`);
        // uploadBytes(imageRef, imgUpload).then(() => {
        //     alert('Image uploaded')
        // })

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
                            value={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}
                        />

                        {/* <label htmlFor='upload-img'>Upload Image: </label>
                        <input type='file' id='upload-img'
                            // value={imgUpload}
                            onChange={(e) => setImgUpload(e.target.files[0])}
                        ></input> */}


                        <button className="addbtn">Add Car</button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}