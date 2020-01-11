import React from 'react';

export const DataCard = ({
  item,
  hideKey,
  flexWidths,
  mainKey,
  removingItem,
}) => (
  <div className="card card-flex ">
    {Object.keys(item).map((key, i) => (
      <>
        {hideKey !== key && (
          <div
            key={i}
            style={{
              flex: flexWidths[i],
              marginLeft: i == 0 ? 10 : 0,
              fontSize: 13,
            }}
          >
            {item[key]}
          </div>
        )}
      </>
    ))}
  </div>
);
