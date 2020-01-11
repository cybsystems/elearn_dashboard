import React from 'react';

export default function ReloadButton(props) {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="btn btn-sm btn-outline-primary"
        style={{ marginRight: 10 }}
      >
        Reload &nbsp; <i className="fa fa-refresh" />
      </button>
    </div>
  );
}
