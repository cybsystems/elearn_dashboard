import React from 'react';
import { MdDashboard, MdWeb, MdRadioButtonChecked } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink as BSNavLink } from 'reactstrap';
import bn from 'utils/bemnames';
import CollapseAbleNavItem from '../../elearnComponents/CollapseAbleNavItem';

const navComponentsStudent = [
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

const navComponentsResource = [
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

const navItems = [
  { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: false,
    isOpenContents: true,
    isOpenPages: true,
    currentTitle: '',
  };

  onNavItemToggle = title => {
    const { currentTitle } = this.state;

    this.setState({ currentTitle: currentTitle === title ? '' : title });
  };

  render() {
    const { currentTitle } = this.state;

    return (
      <aside className={bem.b()}>
        <div className={bem.e('content')}>
          <Navbar>
            <center className="navbar-brand  ">
              <span className="text-white">Elearn</span>
            </center>
          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span>{name}</span>
                </BSNavLink>
              </NavItem>
            ))}

            <CollapseAbleNavItem
              title="Students"
              onNavItemToggle={this.onNavItemToggle}
              isOpen={currentTitle === 'Students'}
              navComponents={navComponentsStudent}
            />
            <CollapseAbleNavItem
              title="Resources"
              onNavItemToggle={this.onNavItemToggle}
              isOpen={currentTitle === 'Resources'}
              navComponents={navComponentsResource}
            />
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
