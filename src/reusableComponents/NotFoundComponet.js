import React from 'react';
export const NotFoundComponent = ({ title, subTitle, width = 200 }) => (
  <div style={{ display: 'grid' }}>
    <img src={require('../assets/img/datanotfound.svg')} />
    <span style={{ fontSize: 20, color: '#556780' }}>{title}</span>
    {subTitle}
  </div>
);
