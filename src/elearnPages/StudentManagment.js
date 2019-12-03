import React, { Component } from 'react';
import Page from '../components/Page';
import StudentList from './students/components/StudentList';
import { connect } from 'react-redux';
import { FilterButton } from '../reusableComponents/FilterButton';
import { breadcrumbs, onFilterClick, loadInvitations } from './utils';
import { NotFoundComponent } from '../reusableComponents/NotFoundComponet';
import ReloadButton from '../reusableComponents/ReloadButton';

export class StudentManagentImpl extends Component {
  componentDidMount = async () => await loadInvitations();
  onFilterClicked = () => onFilterClick(this);
  onRefreshClicked = async () => await loadInvitations();

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
            <ReloadButton onClick={this.onRefreshClicked} />
          </div>
        }
      >
        {originalStudents && originalStudents.length > 0 ? (
          <div>
            {students && originalStudents && originalStudents.length > 0 && (
              <StudentList
                students={students}
                removeingStudent={removeingStudent}
              />
            )}
          </div>
        ) : (
          <center>
            <NotFoundComponent title="Invitations Not Found" />
          </center>
        )}
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
