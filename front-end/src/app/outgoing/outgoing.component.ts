import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { Report } from '../shared/report';

@Component({
  selector: 'app-outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss']
})
export class OutgoingComponent implements OnInit {
  displayedColumns: string[] = ['description', 'value', 'date', 'type', 'category'];
  public reportList: Array<Report>;

  constructor(
    private reportService: ReportService
  ) {
  }

  ngOnInit(): void {
    this.reportService.getReports()
    .subscribe(reports => this.reportList = reports);
  }

}
