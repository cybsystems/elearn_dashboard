import React, { Component } from 'react';
import List from '../../../reusableComponents/List';
import { updateRawData } from '../../../actions';

class RightAlignButtons extends React.Component {
  onClick = () => this.props.onClick(this.props.student);
  render() {
    return (
      <div style={{ float: 'right', marginRight: 15 }}>
        <button className="btn btn-sm btn-primary">Accept</button>
        <button
          onClick={this.onClick}
          className="btn btn-sm btn-danger"
          style={{ marginLeft: 4 }}
        >
          Reject
        </button>
      </div>
    );
  }
}

export default class StudentList extends Component {
  onClick = student => {};

  appendLastButtons = students =>
    students.map(student => {
      student['lastItem'] = (
        <RightAlignButtons onClick={this.onClick} student={student} />
      );

      return student;
    });

  render() {
    const { students } = this.props;
    const flexWidths = [1, 1, 1, 1];
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
          items={this.appendLastButtons(students)}
        />
      </div>
    );
  }
}
