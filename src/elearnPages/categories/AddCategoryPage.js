import React, { Component } from 'react';
import Page from '../../components/Page';
import { AddCategoryForm } from '../forms/AddCategoryForm';

export default class AddCategoryPage extends Component {
  render() {
    return (
      <Page
        className="DashboardPage"
        title="Add Category"
        breadcrumbs={[{ name: 'Add Category', active: true }]}
      >
        <AddCategoryForm />
      </Page>
    );
  }
}
