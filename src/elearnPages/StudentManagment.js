import React, { Component } from 'react';
import Page from '../components/Page';
export default class StudentManagent extends Component {
  render() {
    return (
      <Page
        className="DashboardPage"
        title="Students"
        breadcrumbs={[{ name: 'Students', active: true }]}
      >
        StudentManagent
      </Page>
    );
  }
}
