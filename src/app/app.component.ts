import {Component, Optional, ViewEncapsulation} from '@angular/core';
import {TranslateService} from 'ng2-translate/ng2-translate';
import {MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: 'gene-app',
    template: '<router-outlet></router-outlet>',
    encapsulation: ViewEncapsulation.None
})
export class GeneAppComponent {
    constructor(translate: TranslateService) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');

        const browserLang: string = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
}

export const API_URL_SPRING = 'http://192.168.1.7:8080/api';