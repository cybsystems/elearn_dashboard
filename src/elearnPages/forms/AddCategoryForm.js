import React from 'react';
import Form from 'react-jsonschema-form';
import { categorySchema, categoryUiSchema } from './schemas/categories';
import { postData } from '../../helpers';
import { showToast } from '../../helpers/toasts';

export class AddCategoryForm extends React.Component {
  state = { formData: { CategoryId: '', Category: '' } };
  onSubmit = async ({ formData }, e) => {
    await postData('http://localhost/addCategory.php', formData);
    this.setState({ formData: { CategoryId: '', Category: '' } });
    showToast('Category Added', { type: 'success' });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Add Category </div>
        <div className="card-body container">
          <Form
            schema={categorySchema}
            uiSchema={categoryUiSchema}
            onSubmit={this.onSubmit}
            autoComplete="off"
            formData={this.state.formData}
          >
            <div>
              <button
                type="submit"
                style={{ marginLeft: 20 }}
                className="btn btn-primary btn-sm smbtn"
              >
                Add Category
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
