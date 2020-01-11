import React from 'react';

const  FilterColumnPanel = ({ columns, showFilter }) => (
  <>
    {columns.map((column, i) => (
      <div key={i} style={{ flex: column.flex || 1, color: '#787272' }}>
        <span style={{ fontSize: 14 }}>{column.title}</span>
        <i
          style={{ fontSize: 10, marginLeft: 15, color: '#787272' }}
          className={`fa  fa-chevron-${showFilter ? 'down' : 'up'}`}
        />
      </div>
    ))}
    <div style={{ flex: 1 }}></div>
  </>
);
export default FilterColumnPanel
