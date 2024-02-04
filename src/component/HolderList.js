import React from 'react';

const HolderList = ({ holders, viewHolder, updateHolder, deleteHolder }) => {
  return (
    <div className='CreateFrom'>
      <h2>Place Holder List</h2>
      <ul>
        {holders.map((holders) => (
          <li key={holders.id}>
            {holders.name}
            <button onClick={() => viewHolder(holders)}>View</button>
            <button onClick={() => updateHolder(holders)}>Update</button>
            <button onClick={() => deleteHolder(holders.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolderList;
