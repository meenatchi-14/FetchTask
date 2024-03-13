import React, { useState } from 'react';

const UpdateForm = ({ holder,updateHolder }) => {
  const [formData1, setFormData1] = useState(holder);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData1((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value)
    setFormData1({ ...formData1, [name]: value });
}
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData1.id) {
      updateHolder(formData1);
    }
    setFormData1({ id: '', name: '', username:'',email:'',address:{street:'',suite:'',city:'',zipcode:'',geo:{lat:'',lng:''}},phone:'',website:'',company: {name:'',catchPhrase:'',bs:''}});
  };

  return (
  
    <form className='CreateFrom'>
      <label>Name:
        <input type="text" name="name" value={formData1.name} onChange={handleInputChange} />
      </label>
      <label>
        UserName: 
        <input type="text" name="username" value={formData1.username} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData1.email} onChange={handleInputChange} />
      </label>
      <label>Address</label>
      <label>
        Street:
        <input type="text" name="street" value={formData1.address.street} onChange={handleInputChange} />
      </label>
      <label>
        Suite:
        <input type="text" name="suite" value={formData1.address.suite} onChange={handleInputChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData1.address.city} onChange={handleInputChange} />
      </label>
      <label>
        ZipCode:
        <input type="text" name="zipcode" value={formData1.address.zipcode} onChange={handleInputChange} />
      </label>
      <label>Geo</label>
      <label>
        lat:
        <input type="number" name="lat" value={formData1.address.geo.lat} onChange={handleInputChange} />
      </label>
      <label>
        lng:
        <input type="number" name="lng" value={formData1.address.geo.lng} onChange={handleInputChange} />
      </label>
      <label>
        Phone:
        <input type="phone" name="phone" value={formData1.phone} onChange={handleInputChange} />
      </label>
      <label>
        WebSite:
        <input type="text" name="website" value={formData1.website} onChange={handleInputChange} />
      </label>
      <label>Company</label>
      <label>
        Company Name:
        <input type="text" name="name" value={formData1.company.name} onChange={handleInputChange} />
      </label>
      <label>
      CatchPhrase:
        <input type="text" name="catchPhrase" value={formData1.company.catchPhrase} onChange={handleInputChange} />
      </label>
      <label>
      Bs:
        <input type="text" name="bs" value={formData1.company.bs} onChange={handleInputChange} />
      </label>
      <button type="submit" onClick={handleSubmit}  >Update</button>
    </form>
    
  );
};

export default UpdateForm;