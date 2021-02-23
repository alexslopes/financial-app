import { Component, OnInit } from '@angular/core';
import { Report } from '../shared/report';
import { ReportList } from '../shared/reportList';

@Component({
  selector: 'app-outgoing',
  templateUrl: './outgoing.component.html',
  styleUrls: ['./outgoing.component.scss']
})
export class OutgoingComponent implements OnInit {

  public reportList;

  constructor(
    reportList: ReportList
  ) {
    this.reportList = reportList.reportList
  }

  ngOnInit(): void {
    this
  }

}
