import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ui-kit-form',
  templateUrl: './ui-kit-form.component.html',
  styleUrls: ['./ui-kit-form.component.css']
})
export class UiKitFormComponent implements OnInit {
  public formGroup = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit() {
    console.log('onFormSubmit')
    console.log(this.formGroup.value)
  }

}
