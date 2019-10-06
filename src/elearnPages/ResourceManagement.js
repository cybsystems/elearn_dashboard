import React, { Component } from 'react';
import Page from '../components/Page';

export default class ResourceManagement extends Component {
  render() {
    return (
      <Page
        className="DashboardPage"
        title="Resources"
        breadcrumbs={[{ name: 'Resources', active: true }]}
      >
       ResourceManagent
      </Page>
    );
  }
}
