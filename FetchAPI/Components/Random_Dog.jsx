import React from "react";
import './Random_Dog.css'

const Random_Dog = ({dog_obj}) => {

    console.log(dog_obj.message)
    const showDog_URL = dog_obj.message;

    return (
        <div>
            <img className = "Doggie-Pics" src={showDog_URL} />
        </div>
    )
}

export default Random_Dog