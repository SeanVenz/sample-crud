import axios from "axios";
import { Input } from "../input/input";
import { useState } from "react";

export const GetFamilyMembersWithDetail = () => {

    const [inputValue, setInputValue] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .get(`https://localhost:7045/api/familymembers/${inputValue}/details`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInputValue(e.target.value)
    }

    return (

        <div>
            <Input
                handleSubmit = {handleSubmit}
                handleChange = {handleChange}
                placeHolder = {'ID of Member'}
            ></Input>
        </div>
    )
}