import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {HttpModule, Http} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AgmCoreModule} from '@agm/core';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

import {TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule, MatCardModule,
} from '@angular/material';
import {Ng5BreadcrumbModule, BreadcrumbService} from 'ng5-breadcrumb';
import {Ng2DeviceDetectorModule} from 'ng2-device-detector';
import 'hammerjs';
import {GeneAppComponent} from './app.component';
import {RoutingModule} from './app-routing.module';
import {MainComponent} from './main/main.component';
import {MenuToggleModule} from './core/menu/menu-toggle.module';
import {MenuItems} from './core/menu/menu-items/menu-items';
import {PageTitleService} from './core/page-title/page-title.service';

import {DashboardComponent} from './dashboard/dashboard.component';
import {BlankComponent} from './blank/blank.component';
import {ForgotPasswordComponent} from './session/forgot-password/forgot-password.component';
import {LockScreenComponent} from './session/lockscreen/lockscreen.component';
import {UserListComponent} from './user-list/user-list.component';
import {RegisterrComponent} from './registerr/registerr.component';
import {usersservice} from './Services/users.service';
import {UploadedFile} from 'ng2-uploader/src/classes/uploaded-file.class';
import {FileUploader} from 'ng2-file-upload';
import { LoginnComponent } from './loginn/loginn.component';
import {AuthService} from './Services/auth.service';
import {GrowlModule} from 'primeng/growl';
import {AuthGuard} from './Services/auth-guard.service';


export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, 'assets/i18n', '.json');
}

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};


@NgModule({
    imports: [
        MatCardModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2DeviceDetectorModule.forRoot(),
        RoutingModule,
        FlexLayoutModule,
        Ng5BreadcrumbModule.forRoot(),

        PerfectScrollbarModule,
        MenuToggleModule,
        HttpModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        HttpModule,
        GrowlModule,
        ReactiveFormsModule,

        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
    ],

    declarations: [
        GeneAppComponent,
        MainComponent,
        DashboardComponent,
        BlankComponent,
        ForgotPasswordComponent,
        LockScreenComponent,
        UserListComponent,
        RegisterrComponent,
        LoginnComponent,



    ],
    bootstrap: [GeneAppComponent],
    providers: [
        AuthGuard,
        AuthService,
        usersservice,
        MenuItems,
        BreadcrumbService,
        PageTitleService
    ]
})
export class GeneAppModule {
}
