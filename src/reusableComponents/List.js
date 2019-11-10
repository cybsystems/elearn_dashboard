import React, { Component } from 'react';
import './index.css';
import { updateRawData } from '../actions';
export default class List extends Component {
  render() {
    const { items, flexWidths, removingItem, mainKey } = this.props;
    return (
      <>
        {items.map((item, i) => (
          <ItemCard
            key={i}
            flexWidths={flexWidths}
            removingItem={removingItem}
            item={item}
            mainKey={mainKey}
          />
        ))}
      </>
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

export const DataCard = ({ item, flexWidths }) => (
  <div
    style={{
      display: 'flex',
      backgroundColor: 'white',
      marginTop: 10,
      padding: '7px 0px 7px 0px',
      justifyContent: 'space-between',
      cursor: 'pointer',
    }}
  >
    {Object.keys(item).map((key, i) => (
      <div key={i} style={{ flex: flexWidths[i], marginLeft: i == 0 ? 10 : 0 }}>
        {item[key]}
      </div>
    ))}
  </div>
);
