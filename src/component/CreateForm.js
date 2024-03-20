import React, {  useState ,useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const CreateForm = ({createHolder,initial}) => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState(initial);
  const inputRef = useRef(null);
  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value)
    setFormData({ ...formData, [name]: value });
}
const handleAddress = (event) => {
  const { name, value } = event.target;
  console.log(name, value)
  setFormData(prevState =>({
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
  setFormData(prevState =>({
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
  setFormData(prevState =>({
    ...prevState,
    company:{
      ...prevState.company,
      [name]:value
    }
   }));
}
const handleSubmit = (event) => {
  event.preventDefault();
  if (formData) {
    createHolder(formData);
    console.log(formData);
    navigate("/")
    alert(`${inputRef.current.value}`)
  }
  else{
    console.log("no create")
  }
  setFormData({ id:'++1',name: '',username:'',email:'',address:{street:'',suite:'',city:'',zipcode:'',geo:{lat:'',lng:''}},phone:'',website:'',company:{name:'',catchPhrase:'',bs:''}});
};
  return (
    <form className='Form'>
      <h2>Create Form</h2>
  <div className="block">
      <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange}  ref={inputRef}/>
  </div>

  <div className="block">
      <label>UserName:</label> 
        <input type="text" name="username" value={formData.username} onChange={handleInputChange}  ref={inputRef} />
  </div>

  <div className="block">
      <label>Email: </label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange}  ref={inputRef} />
  </div>
    
  <div className="block">
      <label>Address</label>
  </div>

  <div className="block">
      <label>Street: </label>
        <input type="text" name="street" value={formData.address.street} onChange={handleAddress} ref={inputRef} />
  </div>
  
  <div className="block">
      <label>Suite:</label>
        <input type="text" name="suite" value={formData.address.suite} onChange={handleAddress} ref={inputRef}/>
  </div>

  <div className="block">
       <label>City:</label>
        <input type="text" name="city" value={formData.address.city} onChange={handleAddress} ref={inputRef}/>
  </div>

  <div className="block">
      <label>ZipCode: </label>
        <input type="text" name="zipcode" value={formData.address.zipcode} onChange={handleAddress} ref={inputRef} />
  </div>

  <div className="block">
      <label>Geo</label>
  </div>

  <div className="block">
      <label>lat:</label>
       <input type="text" name="lat" value={formData.address.geo.lat} onChange={handleGeo} ref={inputRef}/>
  </div>
  
  <div className="block">
      <label>lng:</label>
        <input type="number" name="lng" value={formData.address.geo.lng} onChange={handleGeo} ref={inputRef}/>
  </div>

  <div className="block">
      <label>Phone:</label>
        <input type="phone" name="phone" value={formData.phone} onChange={handleInputChange}ref={inputRef} />
</div>

<div className="block">
      <label>WebSite:</label>
        <input type="text" name="website" value={formData.website} onChange={handleInputChange} ref={inputRef} />
</div>
        
<div className="block">      
        <label>Company</label>
</div>

<div className="block">
      <label>Company Name:</label>
        <input type="text" name="name" value={formData.company.name} onChange={handleCompany} ref={inputRef}/>
</div>

<div className="block">
      <label>CatchPhrase:</label>
        <input type="text" name="catchPhrase" value={formData.company.catchPhrase} onChange={handleCompany} ref={inputRef} />
</div>

<div className="block">
      <label>Bs:</label>
        <input type="text" name="bs" value={formData.company.bs} onChange={handleCompany} ref={inputRef} />
</div>

<div>
      <button type="submit" onClick={handleSubmit }>CREATE</button>
      </div> 
      </form>
    
  );
};

export default CreateForm;