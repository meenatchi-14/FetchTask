import React from 'react';

const HolderDetail = ({ holder }) => {
  return (
    <div className='detail'>
      <h2>Place Holder Details</h2>
      <p>Name: {holder.name}</p>
      <p>UserName:{holder.username}</p>
      <p>Email:{holder.email}</p>
      <p>Address</p>
      <p>Street: {holder.address.street}</p>
      <p>Suite: {holder.address.suite}</p>
      <p>City: {holder.address.city}</p>
      <p>ZipCode: {holder.address.zipcode}</p>
      <p>Geo:</p>
      <p>lat: {holder.address.geo.lat}</p>
      <p>lng: {holder.address.geo.lng}</p>
      <p>Phone: {holder.phone}</p>
      <p>WebSite: {holder.website}</p>
      <p>Company</p>
      <p>CompanyName: {holder.company.name}</p>
      <p>CatchPhrase: {holder.company.catchPhrase}</p>
      <p>BS: {holder.company.bs}</p>
    </div>
  );
};

export default HolderDetail;