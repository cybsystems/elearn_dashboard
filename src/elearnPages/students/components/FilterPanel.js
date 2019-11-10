import React, { Component } from 'react';
import { updateRawData } from '../../../actions';

export default class FilterPanel extends Component {
  onChange = e => {
    const field = e.target.id;
    const { students } = this.props;
    const value = e.target.value;
    const newStudents = students.filter(student =>
      student[field]
        .toLowerCase()
        .trim()
        .includes(value.toLowerCase().trim()),
    );
    console.log(newStudents);
  };

  render() {
    const { categories, students, originalStudents } = this.props;
    return (
      <>
        <div style={{ flex: 1 }} className="mr-1"></div>
        <div style={{ flex: 1 }} className="mr-1">
          <input
            type="text"
            className="form-control textf "
            onChange={this.onChange}
            id="name"
            ref="name"
            placeholder="Enter Name"
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
            placeholder="Enter Email"
          />
        </div>
        <div style={{ flex: 1 }}>
          <select
            className="form-control textf"
            onChange={this.onChange}
            ref="category"
            id="category"
          >
            <option>Select Category</option>
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
