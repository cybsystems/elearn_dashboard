import React, { Component } from 'react';
import './index.css';
import { updateRawData } from '../actions';
import { DataCard } from './DataCard';
export default class List extends Component {
  onKeyDown = e => {
    let counter = 1;
    if (e.keyCode == 38) counter = -1;
    let item = this.refs['item' + (e.target.tabIndex + counter)];
    if (item) item.focus();
  };

  render() {
    const { items, flexWidths, removingItem, mainKey, hideKey } = this.props;
    return (
      <div>
        {items.map((item, i) => (
          <div onKeyDown={this.onKeyDown} tabindex={i} ref={'item' + i}>
            <ItemCard
              key={i}
              flexWidths={flexWidths}
              removingItem={removingItem}
              item={item}
              hideKey={hideKey}
              mainKey={mainKey}
            />
          </div>
        ))}
      </div>
    );
  }
}

class ItemCard extends React.Component {
  componentDidUpdate(prevProps) {
    const { removingItem, mainKey, item } = this.props;

    if (prevProps && removingItem && prevProps.removingItem !== removingItem) {
      if (removingItem == item[mainKey]) {
        updateRawData({ removingItem: null });
      }
    }
  }
  render() {
    const { removingItem, item, mainKey } = this.props;

    return (
      <div
        ref="card"
        className={
          removingItem && mainKey && removingItem === item[mainKey]
            ? 'hidden'
            : ''
        }
      >
        <DataCard {...this.props} />
      </div>
    );
  }
}
