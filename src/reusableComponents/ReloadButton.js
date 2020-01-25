import React from 'react';

export default function ReloadButton(props) {
  return (
     
      <button
        onClick={props.onClick}
        className="btn btn-sm  btn-outline-primary"
        style={{ marginRight: 10 ,fontSize:11,height:25}}
      >
        Reload &nbsp; <i className="fa fa-refresh" />
      </button>
    
  );
}
