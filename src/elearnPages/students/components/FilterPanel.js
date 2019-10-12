import React, { Component } from 'react';
import { updateRawData } from '../../../actions';

export default class FilterPanel extends Component {
  onChange = e => {
    const name = this.refs['name'].value;
    const category = this.refs['category'].value;
    updateRawData({
      students: this.props.originalStudents.filter(
        s =>
          s.name.toLowerCase().search(name.toLowerCase()) !== -1 &&
          s.category.toLowerCase().search(category.toLowerCase()) !== -1,
      ),
    });
  };

  render() {
    return (
      <>
        <div style={{ flex: 1 }} className="mr-1">
          <input
            type="text"
            className="form-control textf "
            onChange={this.onChange}
            id="name"
            ref="name"
          />
        </div>

        <div style={{ flex: 2 }} className="mr-1">
          <input
            type="text"
            ref="category"
            className="form-control textf "
            style={{ marginRight: 5 }}
            onChange={this.onChange}
            id="category"
          />
        </div>
        <div style={{ flex: 1 }}></div>
      </>
    );
  }
}
