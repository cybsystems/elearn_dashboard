import React, { Component } from 'react';
import List from '../../../reusableComponents/List';
import { store } from '../../../store';
import { updateRawData } from '../../../actions';

class RightAlignButtons extends React.Component {
  onClick = () => this.props.onClick(this.props.resource);
  render() {
    return (
      <div style={{ float: 'right', marginRight: 15 }}>
        <button className="btn  btn-sm   smbtn">Assign</button>
        <button
          onClick={this.onClick}
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
  onClick = resource => {
    const newResources = store
      .getState()
      .rawData.resources.filter(r => r.name !== resource.name);

    updateRawData({ removingResource: resource.name });
    setTimeout(() => {
      updateRawData({ resources: newResources });
    }, 1000);
  };

  appendLastButtons = resources =>
    resources.map(resource => {
      resource['lastItem'] = (
        <RightAlignButtons onClick={this.onClick} resource={resource} />
      );

      return resource;
    });

  render() {
    const flexWidths = [1, 2, 1];
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
          mainKey="name"
          removingItem={removingResource}
        />
      </div>
    );
  }
}
