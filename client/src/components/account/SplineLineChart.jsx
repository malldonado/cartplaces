import React from "react";
import ReactApexChart from "react-apexcharts";

class SplineLineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "spline-chart",
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        stroke: {
          curve: "straight", // Setting the curve to straight
        },
      },
      series: [
        {
          name: "Series 1",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 150, 200],
        },
      ],
    };
  }
  render() {
    return (
      <div className="w-[50%] mt-[30px] h-full" id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default SplineLineChart;
