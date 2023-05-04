import axios from "axios";
import { useState } from "react"

export const UpdateFamilyMember = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    if (name === 'id') {
      setId(parseInt(value));
    } else {
      setName(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://localhost:7045/api/familymembers/${id}`, { id, name });
      console.log('Family member updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating family member:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="number" name="id" value={id} onChange={handleInputChange} />
        </label>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Update family member</button>
      </form>
    </div>
  );
};
