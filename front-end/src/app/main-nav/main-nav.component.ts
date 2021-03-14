import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Report } from '../shared/report';
import { ReportService } from '../services/report.service';
import { ExportService } from '../services/export.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  private setting = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Financial App',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
    // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
  };

  private csvExporter;
  private reportList: Array<Report>;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private reportService: ReportService,
    private exportService: ExportService
    ) { }

  ngOnInit(): void {

  }

  exportToCsv() {
    this.reportService.getReports()
    .subscribe(reports => this.reportList = reports);

    console.log("Teste");
    this.exportService.exportToCsv(this.reportList, 'reports');
  }

}
