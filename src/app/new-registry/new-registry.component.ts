import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-registry',
  templateUrl: './new-registry.component.html',
  styleUrls: ['./new-registry.component.scss']
})
export class NewRegistryComponent implements OnInit {

  registryForm: FormGroup;

  constructor(
    private rf: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.registryForm = this.rf.group({
      description: ['', Validators.required],
      value: ['', Validators.required],
      category: ['', ],
      date: ['', ],
      type: ['', Validators.required],
    });
  }

  onSubmit() {

  }

}
