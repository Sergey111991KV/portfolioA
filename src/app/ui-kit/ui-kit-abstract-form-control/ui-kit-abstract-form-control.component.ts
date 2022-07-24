import {AfterViewInit, Component, OnChanges, OnInit, Optional, Self, Directive, ChangeDetectorRef} from '@angular/core';
import {ControlValueAccessor, NgControl} from "@angular/forms";
import { BaseComponent } from '../base-component';

@Directive({
  selector: 'app-ui-kit-abstract-form-control',
})
export class UiKitAbstractFormControl<T, U = T>  extends BaseComponent implements ControlValueAccessor, OnChanges, AfterViewInit {

  constructor(
    protected changeDetectorRef: ChangeDetectorRef,
    @Self() @Optional() public ngControl: NgControl | null,
  ) {
    super();

    if ( this.ngControl !== null ) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {}

  public writeValue () {

  }

  public registerOnChange () {

  }

  public registerOnTouched () {

  }

  public ngOnChanges() {
    console.log('ngOnChanges');
  }

}
