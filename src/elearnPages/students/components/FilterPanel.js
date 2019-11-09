import React, { Component } from 'react';
import { updateRawData } from '../../../actions';

export default class FilterPanel extends Component {
  onChange = e => {
    const { originalStudents, students } = this.props;
    let id = e.target.id;
    const name = this.refs[id].value;
    const nameValue = this.refs['name'].value;
    const email = this.refs['email'].value;

    if (id == 'category' && name == 'all') {
      updateRawData({ students: originalStudents });
      return;
    }
    let filteredStudents = originalStudents.filter(
      student => student[id].search(name) != -1,
    );

    filteredStudents =
      id == 'name' && email.trim().length
        ? originalStudents.filter(
            student =>
              student[id].search(name) != -1 &&
              student.email.search(email) != -1,
          )
        : id == 'email' && nameValue.trim().length
        ? originalStudents.filter(
            student =>
              student[id].search(name) != -1 &&
              student.name.search(nameValue) != -1,
          )
        : originalStudents.filter(student => student[id].search(name) != -1);

    updateRawData({ students: filteredStudents });
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
