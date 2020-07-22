import { FormControl } from '@angular/forms'

export class DateFormControl extends FormControl {
  setValue(value: string | null, options: any) {   // hijack the value from control; '|null' is crucial here because during a reset the value by FormControl is set to null!
    if (!value) {
      super.setValue('', {...options, emitModelToViewChange: true});  // if no value present (after reset button), reset fields  to empty string;
      return;
    }
    //  limit to numeric;
    if (value.match(/[^0-9|\/]/gi)) { 
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return;
    }
    // limit input length to 5 characters
    if (value.length > 5) {
      super.setValue(this.value, {...options, emitModelToViewChange: true});
      return;
    }
    // allow editing of digits before the '/'; this can not go after 'auto instert /' block !!
    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, {...options, emitModelToViewChange: true });
      return;
    }
    // auto insert '/' at position 3
    if (value.length === 2) {
      super.setValue(value + '/', {...options, emitModelToViewChange: true});   
      return;
    } 
    super.setValue(value, {...options, emitModelToViewChange: true })    
  }
}
