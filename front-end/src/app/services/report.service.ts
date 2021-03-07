import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { Report } from '../shared/report';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {



  constructor(
    @Optional() private reportList: Array<Report>
  ) {
  }

  getReports(): Observable<Report[]> {
    return of(this.reportList);
  }

  putReport(report: Report): Observable<Report> {
    if(this.reportList == null)
      this.reportList = [];
    this.reportList.push(report);
    return of(report);
  }
}
