import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from '@insurance/core';
import { NGXLogger } from 'ngx-logger';
import { Subject, BehaviorSubject } from 'rxjs';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'insurance-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  private _error = new Subject<string>();
  private _processing = new BehaviorSubject<boolean>(false);
  public error$ = this._error.asObservable();
  public processing$ = this._processing.asObservable();
  error?: { title: string; message: string } = undefined;

  get phoneNumber(): AbstractControl {
    return this.validateForm.controls['email'];
  }

  get password(): AbstractControl {
    return this.validateForm.controls['password'];
  }


  submitForm(): void {
    this.router.navigateByUrl('dashboard')




  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private logger: NGXLogger,
    private fb: FormBuilder,
     private router:Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  ngOnDestroy(): void {
    this._error.complete();
    this._processing.complete();
  }
  async submit() {
    try {
      this._processing.next(true);
      const result = await this.authService
        .login(this.validateForm.value)
        .toPromise();
        console.log(result)

      this.processToken(result.token);
    } catch (error) {
      this.validateForm.patchValue({ password: null });
      if (error instanceof HttpErrorResponse) {
        if (error.status === 404) {
          this._error.next(error.error);
        } else if (error.status === 400 || error.status === 401) {
          this.logger.info('Login failed. Http response: ', error);
          this._error.next('Invalid username or password');
        } else {
          this._error.next('Sign in failed. Please try again later');
        }
      } else {
        this.logger.warn('Login failed. Error: ', error);
        this._error.next(
          'A problem is preventing your request to be successfully honoured'
        );
      }
    } finally {
      this._processing.next(false);
    }
  }

  processToken(token: string) {
    console.log(token)
    this.tokenService.setToken(token);
    this.router.navigate(['/dashboard']);
  }

}
