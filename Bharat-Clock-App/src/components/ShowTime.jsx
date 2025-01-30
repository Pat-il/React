import React from "react";

function ShowTime() {
  const d = new Date();

  return (
    <div>
      <p>
        This The Current Time:{" "}
        {"Last Sync: " +
          d.getDate() +
          "/" +
          (d.getMonth() + 1) +
          "/" +
          d.getFullYear() +
          " @ " +
          d.getHours() +
          ":" +
          d.getMinutes() +
          ":" +
          d.getSeconds()}
      </p>
    </div>
  );
}

export default ShowTime;

// var d = new Date();
// var datetime = "Last Sync: " + d.getDay() + "/" + d.getMonth()
// + "/" + d.getFullYear() + " @ "
// + d.getHours() + ":"
// + d.getMinutes() + ":" + d.getSeconds();
