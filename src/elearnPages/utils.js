import { updateRawData } from '../actions';
import { fetchInvitationApi } from '../apis/students';

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

export const loadInvitations = async () => {
  const res = await fetchInvitationApi();
  updateRawData({ students: res, originalStudents: res });
};
