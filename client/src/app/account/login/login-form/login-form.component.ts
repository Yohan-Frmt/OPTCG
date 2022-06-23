import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../../../core/authentication/models/login.model';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  @Input()
  public isLoading: boolean = false;

  @Output()
  public formSubmit: EventEmitter<ILogin> = new EventEmitter<ILogin>();

  public onSubmit = (): void => {
    if (this.loginForm.invalid) return;
    this.formSubmit.emit(this.loginForm.value as ILogin);
  };
}
