import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { items, flexWidths } = this.props;
    return (
      <>
        {items.map((item, i) => (
          <DataCard key={i} flexWidths={flexWidths} item={item} />
        ))}
      </>
    );
  }
}

const DataCard = ({ item, flexWidths }) => (
  <div
    style={{
      display: 'flex',
      backgroundColor: 'white',
      marginTop: 10,
      padding: '7px 0px 7px 0px',
      justifyContent: 'space-between',
      cursor:'pointer'
    }}
  >
    {Object.keys(item).map((key, i) => (
      <div style={{ flex: flexWidths[i], marginLeft: i == 0 ? 10 : 0 }}  >
        {item[key]}
      </div>
    ))}
  </div>
);
