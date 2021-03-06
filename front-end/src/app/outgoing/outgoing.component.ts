import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { Report } from '../shared/report';
import { ReportList } from '../shared/reportList';

@Component({
  selector: 'app-outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss']
})
export class OutgoingComponent implements OnInit {
  displayedColumns: string[] = ['description', 'value', 'date'];
  public reportList: Array<Report>;

  constructor(
    private reportService: ReportService
  ) {
  }

  ngOnInit(): void {
    this.reportService.getDishes()
    .subscribe(reports => this.reportList = reports);
  }

}
