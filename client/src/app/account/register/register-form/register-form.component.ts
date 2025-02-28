import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { IRegister } from '../../../core/authentication/models';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  public registerForm: UntypedFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl(null, [Validators.required]),
    email: new UntypedFormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    passwordConfirmation: new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  public showPassword: boolean = false;
  public showPasswordConfirmation: boolean = false;

  @Input()
  public isLoading: boolean = false;

  @Output()
  public formSubmit: EventEmitter<IRegister> = new EventEmitter<IRegister>();

  public togglePasswordVisibility = (): void => {
    this.showPassword = !this.showPassword;
  };
  public togglePasswordConfirmationVisibility = (): void => {
    this.showPasswordConfirmation = !this.showPasswordConfirmation;
  };

  public passwordType = (): string => (this.showPassword ? 'text' : 'password');

  public passwordConfirmationType = (): string =>
    this.showPasswordConfirmation ? 'text' : 'password';

  public onPasswordChange = () => {
    if (
      this.registerForm.controls['passwordConfirmation'].value ==
      this.registerForm.controls['password'].value
    ) {
      this.registerForm.controls['passwordConfirmation'].setErrors(null);
    } else {
      this.registerForm.controls['passwordConfirmation'].setErrors({
        mismatch: true,
      });
    }
  };

  public onSubmit = (): void => {
    if (this.registerForm.invalid) return;
    this.formSubmit.emit(this.registerForm.value as IRegister);
  };
}
