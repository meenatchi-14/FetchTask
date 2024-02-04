import { useState } from 'react';

const CreateForm = ({ createHolder,initial }) => {
  const [formData, setFormData] = useState(initial);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.id) {
      createHolder(formData);
    }
    setFormData({ id: '', name: '', username:'',email:'', address: { street:'', suite:'', city:'', zipcode:'', geo:{lat:'', lng:''}}, phone:'', website:'', company: { name:'', catchPhrase:'', bs:''}});
 
}

  return (
  
    <form onSubmit={handleSubmit}  className='CreateFrom'>
      <h2>Create Form</h2>
      <label>Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        UserName: 
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>Address:</label>
      <label>
        Street:
        <input type="text" name="address.street" value={formData.address.street} onChange={handleInputChange} />
      </label>
      <label>
        Suite:
        <input type="text" name="address.suite" value={formData.address.suite} onChange={handleInputChange} />
      </label>
      <label>
        City:
        <input type="text" name="address.city" value={formData.address.city} onChange={handleInputChange} />
      </label>
      <label>
        ZipCode:
        <input type="text" name="address.zipcode" value={formData.address.zipcode} onChange={handleInputChange} />
      </label>
      <label>Geo</label>
      <label>
        lat:
        <input type="number" name="address.geo.lat" value={formData.address.geo.lat} onChange={handleInputChange} />
      </label>
      <label>
        lng:
        <input type="number" name="address.geo.lng" value={formData.address.geo.lng} onChange={handleInputChange} />
      </label>
      <label>
        Phone:
        <input type="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
      </label>
      <label>
        WebSite:
        <input type="text" name="website" value={formData.website} onChange={handleInputChange} />
      </label>
      <label>Company:</label>
      <label>
        Company Name:
        <input type="text" name="company.name" value={formData.company.name} onChange={handleInputChange} />
      </label>
      <label>
      CatchPhrase:
        <input type="text" name="company.catchPhrase" value={formData.company.catchPhrase} onChange={handleInputChange} />
      </label>
      <label>
      Bs:
        <input type="text" name="company.bs" value={formData.company.bs} onChange={handleInputChange} />
      </label>
      <button type="submit">Create</button>
    </form>
    
  );
};

export default CreateForm;