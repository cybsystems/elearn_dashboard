import { updateRawData } from "../actions";

export const columns = [
  { title: 'Id' },
  { title: 'Name' },
  { title: 'Email' },
  { title: 'Category' },
];

export const breadcrumbs = [{ name: 'Students', active: true }];

export const onFilterClick = caller =>
  updateRawData({
    students: caller.props.showFilter
      ? caller.props.originalStudents
      : caller.props.students,
    showFilter: !caller.props.showFilter,
  });
