import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { single } from './data';
import { categoryList } from '../shared/category';
import { Report } from '../shared/report';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'}
];

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['description', 'value', 'date', 'type', 'category'];
  dataSource = ELEMENT_DATA;
  public totalIncome: number;
  public totalOutcome: number;

  public reportListExpensive: Array<Report>;
  public reportListIncome: Array<Report>;

  categoryList: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options para o gráficos
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  legendPosition: string = 'below';
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private reportService: ReportService
  ) {
    Object.assign(this, { categoryList })
  }


  ngOnInit(): void {
    this.mockExpensive();
    this.mockIncome();

    this.reportService.getTotalIncomes()
    .subscribe(total => this.totalIncome = total);

    this.reportService.getTotalOutgoing()
    .subscribe(total => this.totalOutcome = total);

    this.reportService.getReports()
    .subscribe(reports => this.reportListExpensive = reports.
      filter(value => value.type === "expensive")
      .sort(this.orderValue));

      this.reportService.getReports()
    .subscribe(reports => this.reportListIncome = reports.
      filter(value => value.type === "income")
      .sort(this.orderValue));
  }

  onSelect(event) {
    console.log(event);
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  orderValue(a, b) {
    return a - b;
  }

  mockExpensive() {
    let report: Report = new Report;
    report.id = 0;
    report.description = "Teste";
    report.value = 10;
    report.date = new Date(Date.now());
    report.type = "expensive";
    report.category = "home";

    let reportList = new Array<Report>();
    reportList.push(report);
    reportList.push(report);
    reportList.push(report);
    reportList.push(report);
    reportList.push(report);

    this.reportService.putReportList(reportList);
  }

  mockIncome() {
    let report: Report = new Report;
    report.description = "Teste";
    report.value = 10;
    report.date = new Date("2021-03-03");
    report.type = "income";
    report.category = "home";

    let reportList = new Array<Report>();
    reportList.push(report);
    reportList.push(report);
    reportList.push(report);
    reportList.push(report);
    reportList.push(report);

    this.reportService.putReportList(reportList);
  }

}
