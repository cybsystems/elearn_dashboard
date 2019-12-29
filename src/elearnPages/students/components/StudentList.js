import React, { Component } from "react";
import List from "../../../reusableComponents/List";
import { removeInvitation, acceptInvitation } from "./utils";
import "react-toastify/dist/ReactToastify.css";

class RightAlignButtons extends React.Component {
  onClick = tag => this.props.onClick(this.props.student, tag);
  render() {
    const { acceptingStudent, removeInvitation, student } = this.props;

    return (
      <div style={{ float: 'right', marginRight: 15 }}>
        <button
          onClick={() => this.onClick('ACCEPT')}
          className="btn smbtn btn-sm "
          disabled={
            acceptingStudent === student.id || removeInvitation === student.id
          }
          style={{ width: 70 }}
        >
          {acceptingStudent === student.id ? (
            <i className="fa fa-spinner fa-spin" style={{ fontSize: 10 }} />
          ) : (
            '  Accept'
          )}
        </button>
        <button
          onClick={() => this.onClick('REJECT')}
          className="btn smbtn btn-sm btn-danger"
          style={{ marginLeft: 4 }}
          disabled={
            acceptingStudent === student.id || removeInvitation === student.id
          }
        >
          Reject
        </button>
      </div>
    );
  }
}

export default class StudentList extends Component {
  onClick = async (student, tag) => {
    if (tag === "REJECT") {
      removeInvitation(student);
    } else {
      acceptInvitation(student);
    }
  };

  appendLastButtons = students =>
    students.map(student => {
      student["lastItem"] = (
        <RightAlignButtons
          onClick={this.onClick}
          acceptingStudent={this.props.acceptingStudent}
          removeingStudent={this.props.removeingStudent}
          student={student}
        />
      );

      return student;
    });

  render() {
    const { students, removeingStudent } = this.props;
    const flexWidths = [1, 1, 1];
    return (
      <div
        style={{
          height: "80vh",
          overflowY: "auto",
          overflowX: "hidden"
        }}
      >
        <List
          flexWidths={flexWidths}
          items={this.appendLastButtons(students)}
          removingItem={removeingStudent}
          mainKey="id"
        />
      </div>
    );
  }
}
