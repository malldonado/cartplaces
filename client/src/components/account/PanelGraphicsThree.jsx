import { useEffect, useState } from "react";
import React, { Component } from "react";
import Chart from 'apexcharts'

function PanelGraphicsThree() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch("").then((json) => {
      const { data } = json;
      setChartData({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
      });
    });
  }, []);

  return (
    <div>
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="500"
      />
    </div>
  );
}

export default PanelGraphicsThree;
