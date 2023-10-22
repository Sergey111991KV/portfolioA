// import { CommonModule } from '@angular/common';
// import {
//     AfterViewInit,
//     ChangeDetectionStrategy,
//     ChangeDetectorRef,
//     Component,
//     ElementRef,
//     EventEmitter,
//     HostBinding,
//     Input,
//     NgZone,
//     OnChanges,
//     OnDestroy,
//     Optional,
//     Output,
//     Renderer2,
//     Self,
//     SimpleChanges,
//     ViewChild,
//     ViewEncapsulation,
// } from '@angular/core';
// import { FormsModule, NgControl } from '@angular/forms';
//
// /**
//  * Slider.
//  *
//  * @example
//  * ```html
//  * <cnv-slider
//  *   [min]="-50"
//  *   [max]="50"
//  *   [disabled]="disabled"
//  *   (valueChanged)="onChangeValue($event)">
//  * </cnv-slider>
//  * ```
//  */
// @Component({
//     selector: 'tui-slider',
//     templateUrl: './tui-slider.component.html',
//     styleUrls: ['./tui-slider.component.less'],
//     changeDetection: ChangeDetectionStrategy.OnPush,
//     encapsulation: ViewEncapsulation.None,
//     host: {
//         class: 'tui-slider',
//     },
//     standalone: true,
//     imports: [CommonModule, FormsModule],
// })
// // AfterViewInit, OnDestroy,
// export class TuSliderComponent
//     implements  OnChanges
// {
//
//
//     /** @ignore */
//     constructor(
//         public elementRef: ElementRef,
//         public renderer: Renderer2,
//         public changeDetectorRef: ChangeDetectorRef,
//         @Self() @Optional() public ngControl: NgControl,
//     ) {
//     }
//
//     /** @ignore */
//     public ngOnInit(): void {
//
//     }
//
//     /** @ignore */
//     public ngOnChanges(changes: SimpleChanges): void {
//
//     }
//
//   /** @ignore */
//   public ngOnDestroy(): void {
//
//   }
//
//
//
// }


import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'input[type=range][tuiSlider]',
  template: '',
  styleUrls: ['./tu-slider.component.less'],
  standalone: true,
  host: {
    '(input)': '0',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuSliderComponent {
  @Input()
  segments = 1;

  get min(): number {
    return Number(this.elementRef.nativeElement.min) || 0;
  }

  get max(): number {
    return Number(this.elementRef.nativeElement.max || 100);
  }

  get value(): number {
    const { elementRef, control } = this;

    if (control instanceof NgModel) {
      /**
       * If developer uses `[(ngModel)]` and programmatically changes value,
       * the `elementRef.nativeElement.value` is equal to the previous value at this moment.
       */
      return control.viewModel;
    }

    return Number(elementRef.nativeElement.value) || 0;
  }

  @HostBinding('style.--slider-fill-percentage.%')
  get valuePercentage(): number {
    return (100 * (this.value - this.min)) / (this.max - this.min) || 0;
  }

  @HostBinding('style.--slider-segment-width.%')
  get segmentWidth(): number {
    return 100 / Math.max(1, this.segments);
  }

  constructor(
    @Inject(ElementRef)
    private readonly elementRef: ElementRef<HTMLInputElement>,
    @Optional()
    @Self()
    @Inject(NgControl)
    private readonly control: NgControl | null,
    @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef
  ) {
    if (control instanceof NgModel) {
      /**
       * The ValueAccessor.writeValue method is called twice on any value accessor during component initialization,
       * when a control is bound using [(ngModel)], first time with a phantom null value.
       * With `changeDetection: ChangeDetectionStrategy.OnPush` the second call of writeValue with real value don't re-render the view.
       * ___
       * See this {@link https://github.com/angular/angular/issues/14988 issue}
       */
      control.valueChanges
        ?.pipe(take(1))
        .subscribe(() => cdr.markForCheck());
    }
  }
}
