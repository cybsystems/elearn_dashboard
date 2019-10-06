import React, { Component } from 'react';
import { Collapse, NavItem, NavLink as BSNavLink } from 'reactstrap';
import { MdKeyboardArrowDown, MdExtension } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import bn from 'utils/bemnames';
const bem = bn.create('sidebar');

export default class CollapseAbleNavItem extends Component {
  state = {
    isOpenContents: true,
    isOpenPages: true,
  };

  render() {
    const { navComponents, onNavItemToggle, isOpen, title } = this.props;
    return (
      <div>
        <NavItem
          className={bem.e('nav-item')}
          onClick={() => {
            onNavItemToggle(title);
          }}
        >
          <BSNavLink className={bem.e('nav-item-collapse')}>
            <div className="d-flex">
              <MdExtension className={bem.e('nav-item-icon')} />
              <span className=" align-self-start">{title}</span>
            </div>
            <MdKeyboardArrowDown
              className={bem.e('nav-item-icon')}
              style={{
                padding: 0,
                transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
                transitionDuration: '0.3s',
                transitionProperty: 'transform',
              }}
            />
          </BSNavLink>
        </NavItem>
        <Collapse isOpen={isOpen}>
          {navComponents.map(({ to, name, exact, Icon }, index) => (
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
                <span className="">{name}</span>
              </BSNavLink>
            </NavItem>
          ))}
        </Collapse>
      </div>
    );
  }
}
