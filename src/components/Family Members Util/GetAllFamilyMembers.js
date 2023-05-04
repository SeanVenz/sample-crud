import axios from "axios";
import { SimpleButton } from "../Button/simpletButton"

export const GetAllFamilyMembers = () => {

    const fetch = async () => {
        await axios.get('https://localhost:7045/api/familymembers')
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }

    return(
        <div>
            <SimpleButton
                onClick = {fetch}
                string = {'Get All Family Members'}
            />
        </div>
    )

}