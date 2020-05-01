import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Dispatch } from '@ngxs-labs/dispatch-decorator'
import { CreatePost } from '@agora-desktop/core/post/store/post.action'

@Component({
    selector: 'agora-post-edit',
    templateUrl: 'post-edit.component.html',
    styleUrls: ['./post-edit.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostEditComponent implements OnInit {
    formGroup: FormGroup

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.buildForm()
    }

    @Dispatch() save = (): CreatePost => {
        const { title, content } = this.formGroup.value
        return new CreatePost(title, content)
    }

    private buildForm(): void {
        this.formGroup = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required]
        })
    }
}
