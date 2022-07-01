import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType } from "chart.js";

@Component({
  selector: "app-horizantalbarchart",
  templateUrl: "./horizantalbarchart.component.html",
  styleUrls: ["./horizantalbarchart.component.scss"],
})
export class HorizantalbarchartComponent implements OnInit {
  public currentBarChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Current",
    },
  };
  public recommededBarChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: true,
      text: "Recommended",
    },
  };
  public barChartType: any = "horizontalBar";
  public barChartLegend = false;

  public recommededBarChartData: any[] = [
    { data: [10, 20, 30, 40], label: "SL1" },
    { data: [19, 25, 33, 45], label: "SL2" },
    { data: [12, 23, 39, 70], label: "SL3" },
    { data: [22, 29, 35, 55], label: "SL4" },
    { data: [42, 44, 32, 65], label: "SL4" },
  ];

  public currentBarChartData: any[] = [
    { data: [10, 20, 30, 40], label: "SL1" },
    { data: [19, 25, 33, 45], label: "SL2" },
    { data: [12, 23, 39, 70], label: "SL3" },
    { data: [22, 29, 35, 55], label: "SL4" },
    { data: [42, 44, 32, 65], label: "SL4" },
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
