import { MdDashboard, MdWeb, MdRadioButtonChecked } from 'react-icons/md';

export const navComponentsStudent = [
    {
      to: '/student',
      name: 'All Students ',
      exact: false,
      Icon: MdRadioButtonChecked,
    },
    {
      to: '/add_student',
      name: 'Add Student',
      exact: false,
      Icon: MdRadioButtonChecked,
    },
  ];
  
  export const navComponentsResource = [
    {
      to: '/resource',
      name: 'All Resources ',
      exact: false,
      Icon: MdRadioButtonChecked,
    },
    {
      to: '/add_resource',
      name: 'Add Resource',
      exact: false,
      Icon: MdRadioButtonChecked,
    },
  ];
  
  export const navItems = [
    { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
  ];
  