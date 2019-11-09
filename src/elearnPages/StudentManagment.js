import React, { Component } from 'react';
import Page from '../components/Page';
import StudentList from './students/components/StudentList';
import { connect } from 'react-redux';
import { updateRawData } from '../actions';
import { FilterButton } from '../reusableComponents/FilterButton';
import FilterPanel from './students/components/FilterPanel';
import FilterColumnPanel from '../reusableComponents/FilterColumnPanel';
import { fetchInvitationApi } from '../apis/students';
import { columns, breadcrumbs, onFilterClick } from './utils';

export class StudentManagentImpl extends Component {
  componentDidMount = async () => {
    const res = await fetchInvitationApi();
    updateRawData({ students: res, originalStudents: res });
  };
  onFilterClicked = () => onFilterClick(this);

  render() {
    const {
      students,
      showFilter,
      originalStudents,
      removeingStudent,
    } = this.props;
    return (
      <Page
        className="DashboardPage"
        title="Students"
        breadcrumbs={breadcrumbs}
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
              <FilterColumnPanel columns={columns} showFilter={showFilter} />
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
        <div>
          {students && <StudentList students={students} removeingStudent ={removeingStudent}/>}
        </div>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  const {
    students,
    originalStudents,
    showFilter = false,
    removeingStudent,
  } = state.rawData;
  return { students, originalStudents, showFilter, removeingStudent };
};
const StudentManagent = connect(mapStateToProps)(StudentManagentImpl);
export default StudentManagent;
