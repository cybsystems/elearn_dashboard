import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavLink as BSNavLink } from 'reactstrap';
import bn from 'utils/bemnames';
import CollapseAbleNavItem from '../../elearnComponents/CollapseAbleNavItem';
import {
  navItems,
  navComponentsResource,
  navComponentsStudent,
  navComponentsCategory,
} from './utils';

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    currentTitle: '',
  };

  onNavItemToggle = title => {
    const { currentTitle } = this.state;
    this.setState({ currentTitle: currentTitle === title ? '' : title });
  };

  render() {
    const { currentTitle } = this.state;

    return (
      <div className={bem.b()}>
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
            <CollapseAbleNavItem
              title="Categories"
              onNavItemToggle={this.onNavItemToggle}
              isOpen={currentTitle === 'Categories'}
              navComponents={navComponentsCategory}
            />
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
