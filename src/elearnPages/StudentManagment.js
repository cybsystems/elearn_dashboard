import React, { Component } from "react";
import Page from "../components/Page";
import StudentList from "./students/components/StudentList";
import { connect } from "react-redux";
import { FilterButton } from "../reusableComponents/FilterButton";
import { breadcrumbs, onFilterClick, loadInvitations } from "./utils";
import { NotFoundComponent } from "../reusableComponents/NotFoundComponet";
import ReloadButton from "../reusableComponents/ReloadButton";
import FilterColumnPanel from "../reusableComponents/FilterColumnPanel";

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
      acceptingStudent
    } = this.props;
    return (
      <Page
        className="DashboardPage"
        title="Students"
        breadcrumbs={breadcrumbs}
        topComponent={
          <div style={{ float: "right" }}>
            <ReloadButton onClick={this.onRefreshClicked} />
          </div>
        }
      >
        {originalStudents && originalStudents.length > 0
          ? <div>
              <div
                style={{ display: "flex", cursor: "pointer" }}
                onClick={this.onFilterClicked}
              >
                <FilterColumnPanel
                  columns={[
                    { title: "Id", flex: 2 },
                    { title: "Name", flex: 2 },
                    { title: "Email", flex: 2 }
                  ]}
                  showFilter={showFilter}
                />
              </div>

              {students &&
                originalStudents &&
                originalStudents.length > 0 &&
                <StudentList
                  students={students}
                  removeingStudent={removeingStudent}
                  acceptingStudent={acceptingStudent}
                />}
            </div>
          : <center>
              <NotFoundComponent title="Invitations Not Found" />
            </center>}
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
    acceptingStudent
  } = state.rawData;
  return {
    students,
    originalStudents,
    showFilter,
    removeingStudent,
    acceptingStudent
  };
};
const StudentManagent = connect(mapStateToProps)(StudentManagentImpl);
export default StudentManagent;
