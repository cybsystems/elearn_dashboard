import React, { Component } from 'react';
import List from '../../../reusableComponents/List';
import { updateRawData } from '../../../actions';
import { removeInvitationAPI } from '../../../apis/students';
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from '../../../helpers/toasts';

class RightAlignButtons extends React.Component {
  onClick = () => this.props.onClick(this.props.student);
  render() {
    return (
      <div style={{ float: 'right', marginRight: 15 }}>
        <button className="btn smbtn btn-sm ">Accept</button>
        <button
          onClick={this.onClick}
          className="btn smbtn btn-sm btn-danger"
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
    showToast('Invitation Removed', { autoClose: 3000, type: 'success' });
    setTimeout(() => {
      updateRawData({ students: res, originalStudents: res });
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
          height: '80vh',
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
