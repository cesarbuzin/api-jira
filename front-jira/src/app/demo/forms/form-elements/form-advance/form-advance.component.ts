// Angular import
import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-form-advance',
  templateUrl: './form-advance.component.html',
  styleUrls: ['./form-advance.component.scss']
})
export class FormAdvanceComponent {
  //  public method
  items = ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo'];

  itemsAsObjects = [
    { id: 0, name: 'Amsterdam', readonly: true, display: 'display' },
    { id: 1, name: 'Washington', readonly: true },
    { id: 2, name: 'Sydney', readonly: true },
    { id: 3, name: 'Beijing', readonly: true },
    { id: 4, name: 'Cairo', readonly: true }
  ];

  public errorMessages = {
    'startsWithAt@': "Your items need to start with '@'",
    endsWith$: "Your items need to end with '$'"
  };

  public validators = [this.startsWithAt, this.endsWith$];

  // private Method
  private startsWithAt(control: UntypedFormControl) {
    if (control.value.charAt(0) !== '@') {
      return {
        'startsWithAt@': true
      };
    }

    return null;
  }

  private endsWith$(control: UntypedFormControl) {
    if (control.value.charAt(control.value.length - 1) !== '$') {
      return {
        endsWith$: true
      };
    }

    return null;
  }
}
