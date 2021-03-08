import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { Report } from '../shared/report';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Optional } from '@angular/core';
import { createHostListener } from '@angular/compiler/src/core';
import { categoryList } from '../shared/category';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private totalIncomes: number = 0;
  private totalOutgoing: number = 0;
  private reportList: Array<Report>;

  constructor( ) {
  }

  getReports(): Observable<Report[]> {
    return of(this.reportList);
  }

  putReport(report: Report): Observable<Report> {
    if(this.reportList == null)
      this.reportList = [];

    if(report.type === "incomes")
      this.totalIncomes += report.value;
    else
      this.totalOutgoing += report.value;

    var index = categoryList.findIndex( obj => {
      return obj.name === report.category
    })

    console.log(categoryList);

    categoryList[index].value ++;

    this.reportList.push(report);
    return of(report);
  }

  getTotalIncomes(): Observable<number> {
    return of(this.totalIncomes);
  }

  getTotalOutgoing(): Observable<number> {
    return of(this.totalOutgoing);
  }
}
