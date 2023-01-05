

export const AddCar = () => {
    return (
        <section class="createPage">
            <form>
                <fieldset>
                    <legend>Add Car</legend>

                    <div class="container">
                        <input id="name" name="name" class="name" type="text" placeholder="Car Brand" />
                        <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Car Model" />
                        <input id="price" name="price" class="price" type="text" placeholder="Type" />
                        <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Engine" />
                        <input id="artist" name="artist" class="artist" type="text" placeholder="HP" />
                        <input id="genre" name="genre" class="genre" type="text" placeholder="Transmission" />
                        <input id="genre" name="genre" class="genre" type="text" placeholder="Year" />
                        <input id="genre" name="genre" class="genre" type="text" placeholder="Mileage" />

                        <button class="addbtn" type="submit">Add Car</button>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}