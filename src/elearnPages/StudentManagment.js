import React, { Component } from 'react';
import Page from '../components/Page';
import StudentList from './students/components/StudentList';
import { connect } from 'react-redux';
import { updateRawData } from '../actions';
import { FilterButton } from '../reusableComponents/FilterButton';
import FilterPanel from './students/components/FilterPanel';
import FilterColumnPanel from '../reusableComponents/FilterColumnPanel';

export class StudentManagentImpl extends Component {
  componentDidMount = async () => {
    const students = await fetch('http://localhost/getStudents.php').then(res =>
      res.json(),
    );

    updateRawData({ students: students, originalStudents: students });
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
          <div
            style={{ display: 'flex', cursor: 'pointer' }}
            onClick={this.onFilterClicked}
          >
            <FilterColumnPanel
              columns={[
                { title: 'Name' },
                { title: 'Email' },
                { title: 'Category' },
              ]}
              showFilter={showFilter}
            />
          </div>
          {showFilter && (
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
