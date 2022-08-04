import {AfterViewInit, Component, OnChanges, OnInit, Optional, Self, Directive, ChangeDetectorRef, Input, forwardRef} from '@angular/core';
import { UiKitAbstractFormControl } from '$ui-kit/ui-kit-abstract-form-control';
import {ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-ui-kit-input',
  templateUrl: './ui-kit-input.component.html',
  styleUrls: ['./ui-kit-input.component.css'],
  // providers: [{
  //   provide: NG_VALUE_ACCESSOR,
  //   useExisting: forwardRef(() => UiKitInputComponent),
  //   multi: true
  // }]
})
export class UiKitInputComponent implements ControlValueAccessor  {
  private _value: any;

  get value() {
    return this._value;
  }

  @Input()
  set value(val) {
    this._value = val;
    this.onChange(this._value);
  }

  onChange(_: any) {}

  ngOnInit(): void {
  }

  changeValue(e:any) {
    console.log(e)
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() {}

  // /** @ignore */
  // constructor(
  //   protected override changeDetectorRef: ChangeDetectorRef,
  //   @Self() @Optional() public override ngControl: NgControl,
  // ) {
  //   super(changeDetectorRef, ngControl)
  // }
  //
  // override ngOnInit(): void {
  // }

}


//
//
// import {AfterViewInit, Component, OnChanges, OnInit, Optional, Self, Directive, ChangeDetectorRef, Input, forwardRef} from '@angular/core';
// import { UiKitAbstractFormControl } from '$ui-kit/ui-kit-abstract-form-control';
// import {ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR} from "@angular/forms";
//
// @Component({
//   selector: 'app-ui-kit-input',
//   templateUrl: './ui-kit-input.component.html',
//   styleUrls: ['./ui-kit-input.component.css'],
//   // providers: [{
//   //   provide: NG_VALUE_ACCESSOR,
//   //   useExisting: forwardRef(() => UiKitInputComponent),
//   //   multi: true
//   // }]
// })
// export class UiKitInputComponent extends UiKitAbstractFormControl<any> implements OnInit {
//   // @ts-ignore
//   constructor(
//     // @ts-ignore
//     protected changeDetectorRef: ChangeDetectorRef,
//     // @ts-ignore
//     @Self() @Optional() public ngControl: NgControl,
//   ) {
//     super(changeDetectorRef, ngControl);
//   }
//
//   private _value: any;
//
//   // get value() {
//   //   return this._value;
//   // }
//
//   // @Input()
//   // set value(val) {
//   //   this._value = val;
//   //   this.onChange(this._value);
//   // }
//
//   onChange(_: any) {}
//
//   // ngOnInit(): void {
//   // }
//
//   changeValue(e:any) {
//     console.log(e)
//   }
//
//
//   // /** @ignore */
//   // constructor(
//   //   protected override changeDetectorRef: ChangeDetectorRef,
//   //   @Self() @Optional() public override ngControl: NgControl,
//   // ) {
//   //   super(changeDetectorRef, ngControl)
//   // }
//   //
//   // override ngOnInit(): void {
//   // }
//
// }
