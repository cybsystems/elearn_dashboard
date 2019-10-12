import React, { Component } from 'react';
import { updateRawData } from '../../../actions';

export default class FilterPanel extends Component {
  onChange = e => {
    const name = this.refs['name'].value;
    const email = this.refs['email'].value;
    const category = this.refs['category'].value;
    updateRawData({
      students: this.props.originalStudents.filter(
        s =>
          s.name.toLowerCase().search(name.toLowerCase()) !== -1 &&
          s.email.toLowerCase().search(email.toLowerCase()) !== -1 &&
          s.category === category,
      ),
    });
  };

  onSelectChange = () => {
    const category = this.refs['category'].value;
    updateRawData({
      students:
        category == 'all'
          ? this.props.originalStudents
          : this.props.originalStudents.filter(s => s.category == category),
    });
  };
  render() {
    const { categories } = this.props;
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

        <div style={{ flex: 1 }} className="mr-1">
          <input
            type="text"
            ref="email"
            className="form-control textf "
            style={{ marginRight: 5 }}
            onChange={this.onChange}
            id="email"
          />
        </div>
        <div style={{ flex: 1 }}>
          <select
            className="form-control textf"
            onChange={this.onSelectChange}
            ref="category"
          >
            <option value={'all'}>All</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1 }}></div>
      </>
    );
  }
}
