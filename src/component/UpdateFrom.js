import React, { useEffect, useState } from 'react';

const UpdateForm = ({ holder,updateHolder }) => {
  console.log(holder)
  const [formData1, setFormData1] = useState(holder);
  useEffect(()=>{
    setFormData1(holder)},
    [holder]);
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value)
    setFormData1({ ...formData1, [name]: value });
}
const handleAddress = (event) => {
  const { name, value } = event.target;
  console.log(name, value)
  setFormData1(prevState =>({
    ...prevState,
    address:{
      ...prevState.address,
      [name]:value
    }
   }));
}
const handleGeo = (event) => {
  const { name, value } = event.target;
  console.log(name, value)
  setFormData1(prevState =>({
    ...prevState,
    address:{
      ...prevState.address,
      geo:{
        ...prevState.geo,
        [name]:value
      }
    }
   }));
}
const handleCompany = (event) => {
  const { name, value } = event.target;
  console.log(name, value)
  setFormData1(prevState =>({
    ...prevState,
    company:{
      ...prevState.company,
      [name]:value
    }
   }));
}

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData1.id) {
      updateHolder(formData1);
    }
    setFormData1({ id: '', name: '', username:'',email:'',address:{street:'',suite:'',city:'',zipcode:'',geo:{lat:'',lng:''}},phone:'',website:'',company: {name:'',catchPhrase:'',bs:''}});
  };

  return (
    <form className='Form'>
      <h2>Update Form</h2>

  <div className="block">
      <label>Name:</label>
        <input type="text" name="name" value={formData1.name} onChange={handleInputChange} />
  </div>

  <div className="block">
      <label>UserName:</label> 
        <input type="text" name="username" value={formData1.username} onChange={handleInputChange} />
  </div>

  <div className="block">
      <label>Email: </label>
        <input type="email" name="email" value={formData1.email} onChange={handleInputChange} />
  </div>
    
  <div className="block">
      <label>Address</label>
  </div>

  <div className="block">
      <label>Street: </label>
        <input type="text" name="street" value={formData1.address.street} onChange={handleAddress} />
  </div>
  
  <div className="block">
      <label>Suite:</label>
        <input type="text" name="suite" value={formData1.address.suite} onChange={handleAddress} />
  </div>

  <div className="block">
       <label>City:</label>
        <input type="text" name="city" value={formData1.address.city} onChange={handleAddress} />
  </div>

  <div className="block">
      <label>ZipCode: </label>
        <input type="text" name="zipcode" value={formData1.address.zipcode} onChange={handleAddress} />
  </div>

  <div className="block">
      <label>Geo</label>
  </div>

  <div className="block">
      <label>lat:</label>
       <input type="number" name="lat" value={formData1.address.geo.lat} onChange={handleGeo} />
  </div>
  
  <div className="block">
      <label>lng:</label>
        <input type="number" name="lng" value={formData1.address.geo.lng} onChange={handleGeo} />
  </div>

  <div className="block">
      <label>Phone:</label>
        <input type="phone" name="phone" value={formData1.phone} onChange={handleInputChange} />
</div>

<div className="block">
      <label>WebSite:</label>
        <input type="text" name="website" value={formData1.website} onChange={handleInputChange} />
</div>
        
<div className="block">      
        <label>Company</label>
</div>

<div className="block">
      <label>Company Name:</label>
        <input type="text" name="name" value={formData1.company.name} onChange={handleInputChange} />
</div>

<div className="block">
      <label>CatchPhrase:</label>
        <input type="text" name="catchPhrase" value={formData1.company.catchPhrase} onChange={handleCompany} />
</div>

<div className="block">
      <label>Bs:</label>
        <input type="text" name="bs" value={formData1.company.bs} onChange={handleCompany} />
</div>

<div>
      <button type="submit" onClick={handleSubmit }>UPDATE</button>
      </div> 
      </form>
    
  );
};

export default UpdateForm;