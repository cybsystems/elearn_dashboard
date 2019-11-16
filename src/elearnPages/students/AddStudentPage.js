import React, { Component } from 'react';
import Page from '../../components/Page';

export default class AddStudentPage extends Component {
  render() {
    return (
      <Page
        className="DashboardPage"
        title="Add Student"
        breadcrumbs={[{ name: 'Add Students', active: true }]}
      >
        <AddStudentForm />
      </Page>
    );
  }
}

const AddStudentForm = () => (
  <div className="card">
    <div className="card-header">Add Student </div>
  </div>
);
