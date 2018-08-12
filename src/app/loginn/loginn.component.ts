import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {usersservice} from '../Services/users.service';
import {UserForm} from '../entities/user.entites';
import {AuthService} from '../Services/auth.service';
import {Message} from 'primeng/api';
import {CustomValidators} from 'ng2-validation';

@Component({
    selector: 'ms-loginn',
    templateUrl: './loginn.component.html',
    styleUrls: ['./loginn.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginnComponent implements OnInit {

    model: UserForm;
    errorMsg: string = '';
    loginnForm: FormGroup;
    messages: Message[] = [];

    constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    }

    ngOnInit() {
        this.loginnForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, CustomValidators.email])],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {
        this.authService
            .login(this.loginnForm.value)
            .subscribe(isLoggedIn => {
                if (isLoggedIn) {
                    this.router.navigate(['/dashboard']);
                } else {
                    this.messages.push({severity: 'error', summary: 'email/password incorrect'});
                }
            });
    }


}
