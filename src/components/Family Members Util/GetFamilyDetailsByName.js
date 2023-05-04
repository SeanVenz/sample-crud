import axios from "axios"
import { useState } from "react"
import { Input } from "../input/input"

export const GetFamilyDetailsByName = () => {

    const [name, setName] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .get(`https://localhost:7045/api/familymembers/search?name=${name}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

    return(
        <div>
            <Input
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                placeHolder = {"Get By Name"}
            ></Input>
        </div>
    )

}