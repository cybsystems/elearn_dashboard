import React, { Component } from 'react';
import Page from '../components/Page';
import { FilterButton } from '../reusableComponents/FilterButton';

export default class CategoryManagement extends Component {
  render() {
    return (
      <Page
        className="DashboardPage"
        title="Categories"
        breadcrumbs={[{ name: 'Categories', active: true }]}
        topComponent={
          <div style={{ float: 'right' }}>
            <FilterButton />
          </div>
        }
      ></Page>
    );
  }
}
