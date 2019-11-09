import React, { Component } from 'react';
import Page from '../components/Page';
import StudentList from './students/components/StudentList';
import { connect } from 'react-redux';
import { updateRawData } from '../actions';
import { FilterButton } from '../reusableComponents/FilterButton';
import FilterPanel from './students/components/FilterPanel';
import FilterColumnPanel from '../reusableComponents/FilterColumnPanel';
import { store } from '../store';
import { FETCH_INVITATIONS } from '../actions/actionTypes';
import { fetchInvitationApi } from '../apis/students';

export class StudentManagentImpl extends Component {
  componentDidMount = async () => {
    // store.dispatch({ type: FETCH_INVITATIONS });
    const res = await fetchInvitationApi();
    updateRawData({ students: res, originalStudents: res });
  };
  onFilterClicked = () =>
    updateRawData({
      students: this.props.showFilter
        ? this.props.originalStudents
        : this.props.students,
      showFilter: !this.props.showFilter,
    });
  render() {
    const { students, showFilter, originalStudents } = this.props;
    return (
      <Page
        className="DashboardPage"
        title="Students"
        breadcrumbs={[{ name: 'Students', active: true }]}
        topComponent={
          <div style={{ float: 'right' }}>
            <FilterButton
              onClick={this.onFilterClicked}
              txt={showFilter ? 'Hide Filters' : 'Show Filters'}
            />
          </div>
        }
      >
        <div style={{ marginBottom: 10 }}>
          {originalStudents && (
            <div
              style={{ display: 'flex', cursor: 'pointer' }}
              onClick={this.onFilterClicked}
            >
              <FilterColumnPanel
                columns={[
                  { title: 'Id' },
                  { title: 'Name' },
                  { title: 'Email' },
                  { title: 'Category' },
                ]}
                showFilter={showFilter}
              />
            </div>
          )}
          {showFilter && originalStudents && (
            <div style={{ display: 'flex' }}>
              <FilterPanel
                showFilter={showFilter}
                categories={[...new Set(students.map(s => s.category))]}
                originalStudents={originalStudents}
                students={students}
              />
            </div>
          )}
        </div>
        <div>{students && <StudentList students={students} />}</div>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  const { students, originalStudents, showFilter = false } = state.rawData;
  return { students, originalStudents, showFilter };
};
const StudentManagent = connect(mapStateToProps)(StudentManagentImpl);
export default StudentManagent;
