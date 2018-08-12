import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PageTitleService} from '../core/page-title/page-title.service';
import {fadeInAnimation} from '../core/route-animation/route.animation';
import {Http} from '@angular/http';
import {map} from 'rxjs/operator/map';
import {usersservice} from '../Services/users.service';

@Component({
    selector: 'ms-userlist',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[@fadeInAnimation]': 'true'
    },
    animations: [fadeInAnimation]
})
export class UserListComponent implements OnInit {

    lalistusers: any;

    constructor(private pageTitleService: PageTitleService, private http: Http, public listservice: usersservice) {
    }

    ngOnInit() {
        this.pageTitleService.setTitle('User List');
        this.listservice.getListUsers()
            .subscribe(data => {
                    this.lalistusers = data;
                }
                , err => {
                    console.log(err)
                })

    }
}
