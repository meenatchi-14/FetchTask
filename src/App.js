import './App.css';
import React, { useState, useEffect } from 'react';
import CreateForm from './component/CreateForm';
import HolderList from './component/HolderList';
import HolderDetail from './component/HolderDetail';
import HolderUpdate from './component/HolderUpdate';

function App() {
  const [holders, setHolders] = useState([]);
  const [selectedHolder, setSelectedHolder] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    fetchHolders();
  }, []);

  // Fetch users from API
  const fetchHolders = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setHolders(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Create a new user
  const CreateHolder = async (holderData) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(holderData),
      });
      const data = await response.json();
      setHolders([...holders, data]);
    } catch (error) {
      console.error('Error Creating Holder:', error);
    }
  };

  // Update an existing user
  const updateHolder = async (holderData) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${holderData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(holderData),
      });
      const updatedHolder = await response.json();
      const updatedHolders = holders.map((holder) =>
        holder.id === updatedHolder.id ? updatedHolder : holder
      );
      setHolders(updatedHolders);
      setSelectedHolder(null);
    } catch (error) {
      console.error('Error updating holder:', error);
    }
  };

  // Delete a user
  const deleteHolder = async (holderId) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users${holderId}`, {
        method: 'DELETE',
      });
      const updatedHolders = holders.filter((holder) => holder.id !== holderId);
      setHolders(updatedHolders);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className='app'>
    
      <h1>CRUD Application</h1> 
      <div className='main'>
<div className='left'>
<CreateForm createHolder={CreateHolder} initial={{ id: '', name: '', username:'',email:'',address:{street:'',suite:'',city:'',zipcode:'',geo:{lat:'',lng:''}},phone:'',website:'',company: {Name:'',catchPhrase:'',bs:''}}} />
</div>
  
  <div className='center'>
  <HolderList holders={holders} viewHolder={setSelectedHolder} updateHolder={setSelectedHolder} deleteHolder={deleteHolder} />
  </div>
  <div className='right'>
  {selectedHolder ? (
        <div >
          <HolderDetail holder={selectedHolder} />
          </div>
          ) : null}
</div>
<div className='right'>
      {selectedHolder ? (
        <div>
            <HolderUpdate holder={selectedHolder} updateHolder={updateHolder} />
          </div>
          ) : null}    
        
        
      

  </div>
      
      
  </div>
    </div>
  );
}

export default App;