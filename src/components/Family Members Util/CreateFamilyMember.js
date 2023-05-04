import axios from 'axios';
import { useState } from 'react';

export const CreateFamilyMember = () => {
  const [formData, setFormData] = useState({
    age: 0,
    civilStatus: '',
    dateOfBirth: '',
    gender: '',
    occupation: '',
    phoneNumber: '',
    religion: ''
  });

  const [id, setId] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`https://localhost:7045/api/familymembers/${id}/details/register`, formData)
      .then(response => {
        console.log('Family member detail created successfully:', response.data);
      })
      .catch(error => {
        console.error('Error creating family member detail:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'id') {
      setId(parseInt(value));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" name="id" value={id} onChange={handleInputChange} />
      </label>
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      </label>
      <label>
        Civil status:
        <input type="text" name="civilStatus" value={formData.civilStatus} onChange={handleInputChange} />
      </label>
      <label>
        Date of birth:
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} />
      </label>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleInputChange}>
          <option value="">Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Occupation:
        <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} />
      </label>
      <label>
        Phone number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
      </label>
      <label>
        Religion:
        <input type="text" name="religion" value={formData.religion} onChange={handleInputChange} />
      </label>
      <button type="submit">Create family member detail</button>
    </form>
  );
}
