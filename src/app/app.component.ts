import { Component } from "@angular/core";
import * as Highcharts from "highcharts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "butterflycharts";

  highcharts = Highcharts;

  // chartOptions = {
  //   chart: {
  //     type: "spline",
  //   },
  //   xAxis: {
  //     categories: [
  //       "Jan",
  //       "Feb",
  //       "Mar",
  //       "Apr",
  //       "May",
  //       "Jun",
  //       "Jul",
  //       "Aug",
  //       "Sep",
  //       "Oct",
  //       "Nov",
  //       "Dec",
  //     ],
  //   },
  //   yAxis: {
  //     title: {
  //       text: "Temperature °C",
  //     },
  //     tooltip: {
  //       valueSuffix: " °C",
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Tokyo",
  //       data: [
  //         7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
  //       ],
  //     },
  //     {
  //       name: "New York",
  //       data: [
  //         -0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,
  //       ],
  //     },
  //     {
  //       name: "Berlin",
  //       data: [
  //         -0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0,
  //       ],
  //     },
  //     {
  //       name: "London",
  //       data: [
  //         3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,
  //       ],
  //     },
  //   ],
  // };

  categories = ["Band E and Above", "Band D", "Band C", "Band - A,B & NA"];

  chartOptions = {
    chart: {
      type: "bar",
    },
    title: {
      text: "Butterfly Chart",
    },
    subtitle: {
      text: '',
    },
    xAxis: [
      {
        categories: this.categories,
        reversed: false,
        labels: {
          align: "center",
          step: 1,
          reserveSpace: false,
          x: -5,
        },
        lineWidth: 0,
        tickLength: 0,
        left: "50%",
      },
    ],
    yAxis: [
      {
        title: {
          text: null,
        },
        labels: {
          format: "{value}%",
        },
        reversed: true,
        left: 0,
        width: "45%",
        offset: 0,
      },
      {
        title: {
          text: null,
        },
        labels: {
          format: "{value}",
        },
        left: "55%",
        width: "45%",
        offset: 0,
      },
    ],
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },

    tooltip: {
      format:
        "<b>{series.name}, age {point.category}</b><br/>Population: {point.y}",
    },

    series: [
      {
        name: "Required",
        data: [
          2.2, 2.2, 2.3, 2.5
        ],
      },
      {
        name: "Current",
        data: [
          2.1, 2.0, 2.2, 2.4
        ],
        yAxis: 1,
      },
    ],
  };
}
