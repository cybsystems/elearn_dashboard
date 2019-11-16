import React from 'react';
import Form from 'react-jsonschema-form';
import { studentSchema, studentUiSchema } from './schemas/student';
export class AddStudentForm extends React.Component {
  componentDidMount() {
    document.getElementById('root_StudentName').placeholder =
      'Enter Student Name';
    document.getElementById('root_StudentAge').placeholder =
      'Enter Student Age';
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Add Student </div>
        <div className="card-body container">
          <Form schema={studentSchema} uiSchema={studentUiSchema} />
        </div>
      </div>
    );
  }
}
