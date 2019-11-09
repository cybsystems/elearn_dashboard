import React, { Component } from 'react';
import List from '../../../reusableComponents/List';
import { updateRawData } from '../../../actions';
import { store } from '../../../store';
import { REMOVE_INVITATION } from '../../../actions/actionTypes';
import { removeInvitationAPI } from '../../../apis/students';

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
  onClick = async student => {
    const res = await removeInvitationAPI(student.s_id);
    updateRawData({ removeingStudent: student.s_id });
    setTimeout(() => {
      updateRawData({ students: res });
    }, 1000);
  };

  appendLastButtons = students =>
    students.map(student => {
      student['lastItem'] = (
        <RightAlignButtons onClick={this.onClick} student={student} />
      );

      return student;
    });

  render() {
    const { students, removeingStudent } = this.props;
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
          removingItem={removeingStudent}
          mainKey="s_id"
        />
      </div>
    );
  }
}
