import { ChangeDetectionStrategy, Component, Input, Self } from '@angular/core'
import { AbstractControl, NgControl } from '@angular/forms'

@Component({
    selector: 'agora-text-area',
    templateUrl: 'text-area.component.html',
    styleUrls: ['./text-area.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextAreaComponent {
    @Input() placeholder: string

    value: string
    isDisabled: boolean

    constructor(@Self() private controlDirective: NgControl) {
        controlDirective.valueAccessor = this
    }

    get control(): AbstractControl {
        return this.controlDirective.control
    }

    onChange = (_: any) => {}

    onTouch = () => {}

    onBlur(): void {
        this.onTouch()
    }

    onInput(event: any) {
        this.value = event.target.value
        this.onChange(this.value)
    }

    writeValue(value: string): void {
        this.value = value
    }

    registerOnChange(fn: any): void {
        this.onChange = fn
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled
    }
}
