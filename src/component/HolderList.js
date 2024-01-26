import React from 'react';

const HolderList = ({ holders, viewHolder, updateHolder, deleteHolder }) => {
  return (
    <div>
      <h2>Holder List</h2>
      <ul>
        {holders.map((holder) => (
          <li key={holder.id}>
            {holder.name}
            <button onClick={() => viewHolder(holder)}>View</button>
            <button onClick={() => updateHolder(holder)}>Update</button>
            <button onClick={() => deleteHolder(holder.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HolderList;
