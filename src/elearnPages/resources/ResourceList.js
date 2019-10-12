import React, { Component } from 'react';
import List from '../../reusableComponents/List';

class RightAlignButtons extends React.Component {
  onClick = () => this.props.onClick(this.props.resource);
  render() {
    return (
      <div style={{ float: 'right', marginRight: 15 }}>
        <button className="btn btn-sm btn-primary">Assign</button>
        <button
          onClick={this.onClick}
          className="btn btn-sm btn-danger"
          style={{ marginLeft: 4 }}
        >
          Remove
        </button>
      </div>
    );
  }
}

export default class ResourceList extends Component {
  onClick = resource => {};

  appendLastButtons = resources =>
    resources.map(resource => {
      resource['lastItem'] = (
        <RightAlignButtons onClick={this.onClick} resource={resource} />
      );

      return resource;
    });

  render() {
    const flexWidths = [1, 2, 1];
    const { resources } = this.props;
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
        />
      </div>
    );
  }
}
