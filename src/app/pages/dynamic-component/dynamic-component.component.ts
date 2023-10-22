import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, TemplateRef, ComponentRef, OnInit } from '@angular/core';

import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.css']
})
export class DynamicComponent implements OnInit {

  componentRef: ComponentRef<AlertComponent> | undefined;

  @ViewChild("alertContainer", { read: ViewContainerRef }) container!: any;

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
  }

  createComponent(type: string) {
    // this.container.clear();
    const factory: ComponentFactory<AlertComponent> = this.resolver.resolveComponentFactory(AlertComponent);
    this.componentRef = this.container.createComponent(factory);
    if (this.componentRef) {
      this.componentRef.instance.type = type;
      this.componentRef.instance.onDestroy.subscribe(event => console.log(event));
    }

  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

}
