import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    template: `
<!--        <ngx-default-layout>-->
            <router-outlet></router-outlet>
<!--        </ngx-default-layout>-->
    `,
})
export class PagesComponent implements OnInit {
    async ngOnInit(): Promise<void> {}
}
