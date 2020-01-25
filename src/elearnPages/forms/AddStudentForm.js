import React from 'react';
import Form from 'react-jsonschema-form';
import { studentSchema, studentUiSchema } from './schemas/student';
export class AddStudentForm extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="card">
        {categories && (
          <>
            <div className="card-header cardHeader">Add Student </div>
            <div className="card-body container">
              <Form
                schema={studentSchema(this.props.categories)}
                uiSchema={studentUiSchema}
              >
                <div>
                  <button type="submit" className="btn btn-sm smbtn">
                    Add Student
                  </button>
                </div>
              </Form>
            </div>
          </>
        )}
      </div>
    );
  }
}
