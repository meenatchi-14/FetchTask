import React from 'react';

const HolderList = ({ holders, SelectHolder, deleteHolder }) => {
  return (
    <div className='CreateFrom'>
      <h2>Place Holder List</h2>
      <ul>
        {holders.map((holder) => (
          <li key={holder.id}>
            {holder.name}
            <button onClick={() => SelectHolder(holder)}>View</button>
            <button onClick={() => SelectHolder(holder)}>Update</button>
            <button onClick={() => deleteHolder(holder.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolderList;
