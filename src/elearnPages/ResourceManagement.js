import React, { Component } from 'react';
import Page from '../components/Page';
import ResourceList from './resources/ResourceList';
import { connect } from 'react-redux';
import { updateRawData } from '../actions';
import FilterColumnPanel from '../reusableComponents/FilterColumnPanel';
import { FilterButton } from '../reusableComponents/FilterButton';
export class ResourceManagementImpl extends Component {
  componentDidMount() {
    const resources = [];
    for (let i = 0; i < 100; i++)
      resources.push({ name: 'Rerource Item ' + i, type: 'PDF' });
    updateRawData({
      resources: resources,
      originalResources: resources,
    });
  }
  onFilterClicked = () =>
    updateRawData({
      students: this.props.showFilter
        ? this.props.originalResources
        : this.props.resources,
      showFilter: !this.props.showFilter,
    });

  render() {
    const { resources, showFilter, removingResource } = this.props;
    return (
      <Page
        className="DashboardPage"
        title="Resources"
        breadcrumbs={[{ name: 'Resources', active: true }]}
        topComponent={
          <div style={{ float: 'right' }}>
            <FilterButton
              onClick={this.onFilterClicked}
              txt={showFilter ? 'Hide Filters' : 'Show Filters'}
            />
          </div>
        }
      >
        <div
          style={{ display: 'flex', cursor: 'pointer' }}
          onClick={this.onFilterClicked}
        >
          <FilterColumnPanel
            columns={[{ title: 'Name' }, { title: 'Type', flex: 2 }]}
            showFilter={showFilter}
          />
        </div>
        {resources && <ResourceList resources={resources} removingResource={removingResource}/>}
      </Page>
    );
  }
}

const mapStateToPrpos = state => {
  const {
    resources,
    originalResources,
    showFilter,
    removingResource,
  } = state.rawData;
  return { resources, originalResources, showFilter, removingResource };
};

const ResourceManagement = connect(mapStateToPrpos)(ResourceManagementImpl);
export default ResourceManagement;
