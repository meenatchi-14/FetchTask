import React from 'react';
import CreateForm from './CreateForm';

const HolderUpdate = ({ holder, updateHolder }) => {
  return (
    <div>
      <h2>Edit User</h2>
      <CreateForm initial={holder} updateHolder={updateHolder} />
    </div>
  );
};

export default HolderUpdate;