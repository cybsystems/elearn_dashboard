import React, { Component } from 'react';
import Page from '../../components/Page';

export default class AddResourcePage extends Component {
  render() {
    return (
      <Page
        className="DashboardPage"
        title="Add Resources"
        breadcrumbs={[{ name: 'Add Resources', active: true }]}
      >
        Add Resource
      </Page>
    );
  }
}
