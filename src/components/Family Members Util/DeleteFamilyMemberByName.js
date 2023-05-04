import axios from "axios"
import { useState } from "react"
import { Input } from "../input/input"

export const DeleteFamilyMemberByName = () => {

    const [value, setValue] = useState('')

    const handleChange = (e) =>{
        e.preventDefault();
        setValue(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.delete(`https://localhost:7045/api/familymembers/${value}`)
            .then(console.log('deleted'))
            .catch(error => console.log(error));
    }

    return (
        <div>
            <Input
                handleChange = {handleChange}
                handleSubmit = {handleSubmit}
                placeHolder = {"Delete By Name"}
            />
        </div>
    )

}