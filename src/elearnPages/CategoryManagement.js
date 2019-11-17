import React, { Component } from 'react';
import Page from '../components/Page';
import { FilterButton } from '../reusableComponents/FilterButton';
import { updateRawData } from '../actions';
import { getCategories, removeCategory } from '../apis/categories';
import { connect } from 'react-redux';
import { NotFoundComponent } from '../reusableComponents/NotFoundComponet';
import { showToast } from '../helpers/toasts';
export class CategoryManagementImpl extends Component {
  componentDidMount = async () => {
    const categories = await getCategories();
    updateRawData({ categories: categories });
  };
  refresh=async ()=>{
     const categories = await getCategories();
    updateRawData({ categories: categories });
  }
  render() {
    const { categories } = this.props;
    return (
      <Page
        className="DashboardPage"
        title="Categories"
        breadcrumbs={[{ name: 'Categories', active: true }]}
        topComponent={
          <div style={{ float: 'right' }}>
            <button onClick={this.refresh} className="btn btn-sm btn-outline-primary" style={{marginRight:10}}>
              Reload &nbsp; <i className="fa fa-refresh" />
            </button>
            <FilterButton />
          </div>
        }
      >
        {categories &&
          categories.length > 0 &&
          categories.map(categoryItem => (
            <Category categoryItem={categoryItem} />
          ))}
        {categories && categories.length === 0 && (
          <center>
            <NotFoundComponent title="Categories Not Found" />
          </center>
        )}
      </Page>
    );
  }
}

const Category = ({ categoryItem }) => (
  <div className="card" style={{ marginTop: 10 }}>
    <div className="card-body">
      {categoryItem.category}
      <div style={{ float: 'right' }}>
        <button
          onClick={async () => {
            const categories = await removeCategory(categoryItem.cat_id);
            showToast('Category Removed', { type: 'success' });
            updateRawData({ categories: categories });
          }}
          className="btn btn-sm smbtn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  const { categories = [] } = state.rawData;
  return { categories: categories };
};

const CategoryManagement = connect(mapStateToProps)(CategoryManagementImpl);
export default CategoryManagement;
