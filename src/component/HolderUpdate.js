import React from 'react';
import UpdateForm from './UpdateFrom';

const HolderUpdate = ({ holder, updateHolder }) => {
  return (
    <div>
      <h2>Update User</h2>
      <UpdateForm  holder={holder} updateHolder={updateHolder} />
    </div>
  );
};

export default HolderUpdate;