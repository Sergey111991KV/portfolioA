import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, FormArray } from '@angular/forms';

export type RatingTitleFormGroup = FormGroup<{
  level: FormControl<number>;
  tags: FormArray<FormControl<string>>;
}>;

@Component({
  selector: 'ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {

  constructor(
    private fb: NonNullableFormBuilder,
  ) { }

  ngOnInit() {
  }

}
