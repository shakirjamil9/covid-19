import React from "react";
import { Line, Bubble } from "react-chartjs-2";

function Practice() {
  return (
    <div>
      <Line
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Covid",
              backgroundColor: "lightgray",
              borderColor: "gray",
              data: [50, 10, 5, 200, 20, 30, 45],
            },
          ],
        }}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
}

export default Practice;
