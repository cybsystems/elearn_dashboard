import React, { Component } from 'react';
import List from '../../../reusableComponents/List';

export default class StudentList extends Component {
  appendLastButtons = students =>
    students.map(student => {
      student['lastItem'] = (
        <div style={{ float: 'right', marginRight: 15 }}>
          <button className="btn btn-sm btn-primary">Accept</button>
          <button className="btn btn-sm btn-danger" style={{ marginLeft: 4 }}>
            Reject
          </button>
        </div>
      );

      return student;
    });

  render() {
    const { students } = this.props;
    const  flexWidths=[1,2,1]
    return (
      <div style={{ height: '75vh', overflowY: 'auto', overflowX: 'hidden' }}>
        <List
          flexWidths={flexWidths}
          items={this.appendLastButtons(students)}
        />
      </div>
    );
  }
}
