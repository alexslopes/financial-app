import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../services/report.service';
import {   MatDialog, MatDialogRef  } from '@angular/material/dialog';
import { Report } from '../shared/report';

@Component({
  selector: 'app-new-registry',
  templateUrl: './new-registry.component.html',
  styleUrls: ['./new-registry.component.scss']
})
export class NewRegistryComponent implements OnInit {

  registryForm: FormGroup;
  report: Report;
  type: string;

  formErrors = {
    'description': '',
    'value': '',
    'category': '',
    'date': ''
  }

  validationMessages = {
    'description': {
      'required': 'Description is required.'
    },
    'value': {
      'required': 'Value is required.',
      'pattern': 'Value must contain only numbers.'
    },
    'date': {
      'required': 'Date is required.'
    }
  };

  constructor(
    private rf: FormBuilder,
    private reportService: ReportService,
    public dialogRef: MatDialogRef<NewRegistryComponent>
  ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.registryForm = this.rf.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required]
    });

    this.registryForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data?: any) {
    if (!this.registryForm) { return; }
    const form = this.registryForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.report = this.registryForm.value;

    console.log(this.report);

    this.reportService.putReport(this.report);

    this.registryForm.reset({
      description: '',
      value:'',
      date: '',
      type: '',
      category: ''
    })
  }

}
