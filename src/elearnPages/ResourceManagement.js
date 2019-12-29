import React, { Component } from 'react';
import Page from '../components/Page';
import ResourceList from './resources/components/ResourceList';
import { connect } from 'react-redux';
import { updateRawData } from '../actions';
import FilterColumnPanel from '../reusableComponents/FilterColumnPanel';
import { FilterButton } from '../reusableComponents/FilterButton';
import {
  removeResource,
  downloadResource,
  getResources,
} from './resources/components/utils';
import ReloadButton from '../reusableComponents/ReloadButton';
import { NotFoundComponent } from '../reusableComponents/NotFoundComponet';

export class ResourceManagementImpl extends Component {
  componentDidMount = async () => await getResources();

  onItemClicked = (resource, tag) => {
    if (tag === 'REMOVE') {
      removeResource(resource);
    }
    if (tag === 'VIEW') {
      downloadResource(resource);
    }
  };

  onRefreshClicked = async () => await getResources();

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
            <ReloadButton onClick={this.onRefreshClicked} />

            <FilterButton
              onClick={this.onFilterClicked}
              txt={showFilter ? 'Hide Filters' : 'Show Filters'}
            />
          </div>
        }
      >
        {resources && resources.length ? (
          <>
            <div
              style={{ display: 'flex', cursor: 'pointer' }}
              onClick={this.onFilterClicked}
            >
              <FilterColumnPanel
                columns={[
                  { title: 'Id', flex: 1 },
                  { title: 'Name', flex: 2 },
                  { title: 'Type', flex: 1 },
                ]}
                showFilter={showFilter}
              />
            </div>
            <ResourceList
              resources={resources}
              onItemClick={this.onItemClicked}
              removingResource={removingResource}
            />{' '}
          </>
        ) : (
          <center>
            <NotFoundComponent title="Resources Not Found" />
          </center>
        )}
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
