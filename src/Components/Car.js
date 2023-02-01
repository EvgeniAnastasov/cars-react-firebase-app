import { Link } from "react-router-dom"

export const Car = ({ car }) => {

    return (

        <div className="card-box">
            <img src={car.ImageUrl} />
            <div>
                <div className="text-center">

                    <p>Car Brand: {car.CarBrand}</p>
                    <p>Car model: {car.CarModel}</p>
                    <p>HP: {car.HP}</p>
                    <p>Year: {car.Year}</p>
                    <p>Type: {car.Type}</p>
                    <p>Engine: {car.Engine}</p>
                    <p>Transmission: {car.Transmission}</p>

                </div>
                <div className="btn-group">
                    {/* <Link to={{ pathname: `/details/${car.id}`, state: { car } }} id="details">Details</Link> */}

                    <Link to={`/details/${car.id}`} state={{ car }} id="details">Details</Link>
                </div>
            </div>
        </div>
    )
}