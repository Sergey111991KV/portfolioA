import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    template: `
        <ngx-layout>
            <router-outlet></router-outlet>
        </ngx-layout>
    `,
})
export class PagesComponent implements OnInit {
    async ngOnInit(): Promise<void> {}
}
