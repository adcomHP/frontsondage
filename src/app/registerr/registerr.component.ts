import {Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {fadeInAnimation} from '../core/route-animation/route.animation';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';
import {usersservice} from '../Services/users.service';
import {Observable} from 'rxjs/Observable';
import {pipe} from 'rxjs/util/pipe';
import {tap} from 'rxjs/operators';
import {UserForm} from '../entities/user.entites';
import {AuthService} from '../Services/auth.service';
import {Message} from 'primeng/api';


const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
    selector: 'ms-registerr',
    templateUrl: './registerr.component.html',
    styleUrls: ['./registerr.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '[@fadeInAnimation]': 'true'
    },
    animations: [fadeInAnimation]
})
export class RegisterrComponent implements OnInit {

    public form: FormGroup;
    errorMsg: string = '';
    messages: Message[] = [];
    model: UserForm;

    constructor(private router: Router, private formBuilder: FormBuilder, public userservice: usersservice, private authService: AuthService) {
    }


    ngOnInit() {
        this.form = this.formBuilder.group({
            nom: [null, Validators.compose([Validators.required, Validators.maxLength(15)])],
            prenom: [null, Validators.compose([Validators.required, Validators.maxLength(15)])],
            cin: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8)])],
            email: [null, Validators.compose([Validators.required, CustomValidators.email])],
            tel: [null, Validators.compose([Validators.required, CustomValidators.phone('TN')])],
            birth_date: [null, Validators.compose([Validators.required, CustomValidators.date])],
            //chitzid il photo bil import baid
            gender: [null, Validators.required],
            imageuser: [null, Validators.required],
            password: password,
            confirmPassword: confirmPassword
        })
    }

    /*
     onSubmit(): void {
         this.userservice.create(this.form.value)
             .subscribe(data => {
                 if (data.status == 200 && data.result == true) {
                     this.router.navigate(['dashboard']);
                 }
             }, err => {
                 console.log(err)
             })
     }*/

    /*
        onSubmit(): void {
            this.userservice.create(this.form.value).subscribe(
                res => {
                    if (res.status == 200 && res.result == true) {
                        this.router.navigate(['']);
                    }
                },
                err => {
                    this.errorMsg = err;
                }
            );
        }
    */
    onSubmit(): void {
        this.messages = [];
        this.authService
            .register(this.form.value)
            .subscribe(isRegistred => {
                if (isRegistred) {
                    this.router.navigate(['dashboard']);
                } else {
                    this.messages.push({severity: 'error', summary: 'Email already in use'});
                }
            });
    }

}
