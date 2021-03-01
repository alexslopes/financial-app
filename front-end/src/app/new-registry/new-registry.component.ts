import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Report } from '../shared/report';
import { ReportList } from '../shared/reportList';

@Component({
  selector: 'app-new-registry',
  templateUrl: './new-registry.component.html',
  styleUrls: ['./new-registry.component.scss']
})
export class NewRegistryComponent implements OnInit {

  registryForm: FormGroup;
  report: Report;
  reportList: ReportList;

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
    private rf: FormBuilder
  ) {
    this.createForm();
    this.reportList = new ReportList;
   }

  ngOnInit(): void {
  }

  createForm() {
    this.registryForm = this.rf.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      date: ['', Validators.required]
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
    this.reportList.reportList.push(this.report);

    console.log(this.reportList);
  }

}