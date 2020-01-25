import React, { Component } from 'react';
import Page from '../../components/Page';
import { AddStudentForm } from '../forms/AddStudentForm';
import { updateRawData } from '../../actions';
import { connect } from 'react-redux';
import { getCategories } from '../../apis/categories';

export class AddStudentPageImpl extends Component {
  componentDidMount = async () => {
    const categories = await getCategories();
    updateRawData({ categories: categories });
  };
  render() {
    const { categories = [] } = this.props;
    return (
      <Page
        className="DashboardPage"
        title="Add Student"
        breadcrumbs={[{ name: 'Add Students', active: true }]}
      >
        <AddStudentForm categories={categories} />
      </Page>
    );
  }
}

const mapStateToProps = state => {
  const categories = state.rawData.categories;
  return { categories: categories };
};

const AddStudentPage = connect(mapStateToProps)(AddStudentPageImpl);
export default AddStudentPage;
