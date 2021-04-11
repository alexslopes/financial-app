import { Component, OnInit } from '@angular/core';
import {   MatDialog  } from '@angular/material/dialog';
import { NewRegistryComponent } from '../new-registry/new-registry.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLoginForm() {
    this.dialog.open(NewRegistryComponent, {width: '500px', height: '450px'})
  }


}
