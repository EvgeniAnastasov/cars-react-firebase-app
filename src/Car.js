
export const Car = ({car}) => {
    return (

        <div className="card-box">
        <img src="./images/BrandiCarlile.png" />
        <div>
            <div className="text-center">

                <p>Car Brand: {car.CarBrand}</p>
                
                <p>Car model: {car.CarModel}</p>
                {/* <p>Genre: Low Country Sound Music</p>
                <p>Price: $12.80</p>
                <p>Release Date: October 1, 2021</p> */}
            </div>
            <div className="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>
    )
}