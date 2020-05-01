import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { RegisterUser } from '@agora-desktop/core/auth/store/auth/auth.action'

@Component({
    selector: 'agora-register',
    templateUrl: 'register.component.html',
    styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
    formGroup: FormGroup

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.buildForm()
    }

    @Dispatch() register = (): RegisterUser => {
        const { username, password, email } = this.formGroup.value
        return new RegisterUser(username, password, email)
    }

    private buildForm(): void {
        this.formGroup = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        })
    }
}
