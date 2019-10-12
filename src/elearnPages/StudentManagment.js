import React, { Component } from 'react';
import Page from '../components/Page';
import StudentList from './students/components/StudentList';
import { connect } from 'react-redux';
import { updateRawData } from '../actions';
import { FilterButton } from '../reusableComponents/FilterButton';

export class StudentManagentImpl extends Component {
  componentDidMount() {
    const students = [];
    for (let i = 0; i < 100; i++)
      students.push({ name: 'Student ' + i, category: 'Category ' + i });
    updateRawData({ students: students });
  }
  onFilterClicked = () => updateRawData({ showFilter: !this.props.showFilter });
  render() {
    const { students, showFilter } = this.props;
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
          <div style={{ display: 'flex' }}>
            <FilterColumnPanel
              columns={[{ title: 'Name' }, { title: 'Category', flex: 2 }]}
              showFilter={showFilter}
            />
          </div>
        </div>
        <div>{students && <StudentList students={students} />}</div>
      </Page>
    );
  }
}

const FilterColumnPanel = ({ columns, showFilter }) => (
  <>
    {columns.map(column => (
      <div style={{ flex: column.flex || 1, color: '#787272' }}>
        <span style={{ fontSize: 14 }}>{column.title}</span>
        <i
          style={{ fontSize: 10, marginLeft: 15, color: '#787272' }}
          className={`fa  fa-chevron-${showFilter ? 'down' : 'up'}`}
        />
      </div>
    ))}
    <div style={{ flex:1 }}></div>
  </>
);



const mapStateToProps = state => {
  const { students, showFilter = false } = state.rawData;
  return { students, showFilter };
};
const StudentManagent = connect(mapStateToProps)(StudentManagentImpl);
export default StudentManagent;
