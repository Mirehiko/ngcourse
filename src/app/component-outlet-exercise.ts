//<component-outlet-exercise type="email"></component-outlet-exercise>
import {Component, Input} from '@angular/core';

@Component({selector: 'hello', template: '<input value="only number" />'})
export class OnlyNumberInputComponent {
}
@Component({selector: 'hello', template: '<input value="email" />'})
export class OnlyEmailInputComponent {
}

@Component({
    selector: 'component-outlet-exercise',
    template: `Now selected component is:
    <ng-container *ngComponentOutlet="currentInput">
    </ng-container>`
})
export class ComponentOutletExerciseComponent {
    currentInput = OnlyNumberInputComponent;

    @Input() set type(type: 'email'|'numbers') {
        this.currentInput = OnlyNumberInputComponent;
        if (type === 'email') { this.currentInput = OnlyEmailInputComponent; }
    }
}
