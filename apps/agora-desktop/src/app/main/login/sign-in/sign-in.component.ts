import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { LoginUser } from '@agora-desktop/core/auth/store/auth/auth.action'

@Component({
    selector: 'agora-sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
    formGroup: FormGroup

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.buildForm()
    }

    @Dispatch() login = (): LoginUser => {
        const { username, password } = this.formGroup.value
        return new LoginUser(username, password)
    }

    private buildForm(): void {
        this.formGroup = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
}
