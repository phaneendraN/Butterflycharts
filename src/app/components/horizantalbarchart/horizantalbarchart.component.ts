import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

@Component({
  selector: "app-horizantalbarchart",
  templateUrl: "./horizantalbarchart.component.html",
  styleUrls: ["./horizantalbarchart.component.scss"],
})
export class HorizantalbarchartComponent implements OnInit {
  public currentBarChartOptions: any = {
    responsive: true,
    tooltips: {
      mode: "nearest",
    },
    plugins: [ChartDataLabels],
    // plugins: {
    //   datalabels: {
    //     anchor: 'end',
    //     align: 'cdnter',
    //     font: {
    //       size: 20,
    //     },
    //    formatter:  function(value, context) {
    //      return value + '%';
    //    }
    //  }
    // },
    scales: {
      yAxes: [
        {
          categoryPercentage: 10,
          barPercentage: 2.0,
          barThickness: 12,
          maxBarThickness: 15,
          minBarLength: 5,
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
          },
        },
      ],
    },
    title: {
      display: true,
      text: "Current",
      position: "bottom",
    },
  };
  public recommededBarChartOptions: any = {
    responsive: true,
    plugins: [ChartDataLabels],
    //   plugins: {
    //     datalabels: {
    //       anchor: 'end',
    //       align: 'cdnter',
    //       font: {
    //         size: 20,
    //       },
    //      formatter:  function(value, context) {
    //        return value + '%';
    //      }
    //    }
    //  },
    scales: {
      yAxes: [
        {
          categoryPercentage: 1,
          barPercentage: 2,
          barThickness: 12,
          maxBarThickness: 15,
          minBarLength: 5,
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 0,
          },
        },
      ],
    },
    tooltips: {
      mode: "nearest",
    },
    title: {
      display: true,
      text: "Recommended",
      position: "bottom",
    },
  };
  public barChartType: any = "horizontalBar";
  public barChartLegend = false;

  public recommededBarChartData: any[] = [
    { data: [20, 20, 30, 40], label: "SL1",
                     },
    { data: [19, 25, 33, 45], label: "SL2",
                    },
    { data: [12, 23, 39, 70], label: "SL3",
                    },
    { data: [22, 29, 35, 55], label: "SL4",
                    },
    { data: [42, 44, 32, 65], label: "SL5",
                    },
  ];

  public currentBarChartData: any[] = [
    { data: [20, 20, 30, 40], label: "SL1" },
    { data: [19, 25, 33, 45], label: "SL2" },
    { data: [12, 23, 39, 70], label: "SL3" },
    { data: [22, 29, 35, 55], label: "SL4" },
    { data: [42, 44, 32, 65], label: "SL5", categoryPercentage: 10.0 },
  ];

  public barChartLabels: string[] = [
    "Band E and Above",
    "Band D",
    "Band C",
    "Band - A,B & NA",
  ];

  constructor() {}

  ngOnInit() {}

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: MouseEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
