import React from "react";

function ClockTime() {
  let date = new Date();

  return (
    <div>
      <p className="lead">
        This is the Current Time: {date.toLocaleDateString()} :{" "}
        {date.toLocaleTimeString()}
      </p>
    </div>
  );
}

export default ClockTime;
