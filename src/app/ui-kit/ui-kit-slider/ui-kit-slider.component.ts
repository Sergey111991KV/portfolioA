import {Component, ElementRef, Inject, OnInit, Optional} from '@angular/core';
import {TUI_SLIDER_OPTIONS, TuiSliderOptions} from "$ui-kit/ui-kit-slider/ui-kit-slider-options";
import {NgControl} from "@angular/forms";

@Component({
  selector: `input[type=range][tuiSlider]`,
  template: '',
  styleUrls: ['./ui-kit-slider.component.css'],
  host: {
    /**
     * For change detection.
     * Webkit does not have built-in method for customization of filling progress (as Firefox).
     * We draw filling of progress by `background: linear-gradient(...)` of the track.
     * This function triggers change detection (for {@link valuePercentage} function) when we drag thumb of the input.
     */
    '(input)': `0`,
    '[style.--tui-slider-track-color]': `options.trackColor`,
  },
})
export class UiKitSliderComponent implements OnInit {
  get min(): number {
    return Number(this.elementRef.nativeElement.min);
  }

  get max(): number {
    return Number(this.elementRef.nativeElement.max || 100);
  }

  get step(): number {
    return Number(this.elementRef.nativeElement.step) || 1;
  }
  constructor(
    @Optional()
    private readonly control: NgControl | null,
    @Inject(TUI_SLIDER_OPTIONS) readonly options: TuiSliderOptions,
    @Inject(ElementRef) readonly elementRef: ElementRef<HTMLInputElement>,
  ) {
    console.log(this.elementRef)
  }

  ngOnInit(): void {
  }

}
