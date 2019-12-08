import React from "react";

export const DashboardCard = ({ title, icon, count, color }) =>
  <div className="card">
    <div>
      <div style={{ display: "flex", height: 80 }}>
        <div style={{ backgroundColor: color, minWidth: 75 }}>
          <center>
            {" "}<i
              style={{ fontSize: 50, color: "white", marginTop: 10 }}
              className={icon}
            />
          </center>
        </div>
        <div
          style={{ flex: 2, marginLeft: 20, color: "#a5b1b3", marginTop: 5 }}
        >
          <div style={{ display: "grid" }}>
            <span>
              {" "}{title}
            </span>
            <b style={{ color: "black", fontSize: 25 }}>
              {count}
            </b>
          </div>
        </div>
      </div>
    </div>
  </div>;