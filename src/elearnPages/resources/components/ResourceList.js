import React, { Component } from 'react';
import List from '../../../reusableComponents/List';
import { store } from '../../../store';
import { updateRawData } from '../../../actions';

class RightAlignButtons extends React.Component {
  onClick = tag => this.props.onClick(this.props.resource, tag);
  render() {
    return (
      <div style={{ float: 'right', marginRight: 15 }}>
        <button
          onClick={() => this.onClick('VIEW')}
          className="btn  btn-sm   smbtn"
        >
          View
        </button>
        <button
          onClick={() => this.onClick('REMOVE')}
          className="btn  btn-sm btn-danger  smbtn"
          style={{ marginLeft: 4 }}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default class ResourceList extends Component {
  onClick = (resource, tag) => this.props.onItemClick(resource, tag);

  appendLastButtons = resources =>
    resources.map(resource => {
      resource['lastItem'] = (
        <RightAlignButtons onClick={this.onClick} resource={resource} />
      );

      return resource;
    });

  render() {
    const flexWidths = [1, 0, 1, 1];
    const { resources, removingResource } = this.props;
    return (
      <div
        style={{
          height: '77vh',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <List
          flexWidths={flexWidths}
          items={this.appendLastButtons(resources)}
          mainKey="rid"
          hideKey="rpath"
          removingItem={removingResource}
        />
      </div>
    );
  }
}
