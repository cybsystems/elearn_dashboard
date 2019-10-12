import React, { Component } from 'react';
export const FilterButton = ({
  txt = 'Show Filters',
  iconClass = 'fa fa-filter',
    onClick
}) => (
  <button onClick={onClick} className="btn btn-sm  btn-outline-primary">
    {txt} <i className={iconClass} />
  </button>
);