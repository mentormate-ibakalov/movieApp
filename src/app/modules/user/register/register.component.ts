import { MessageService } from '@shared/services/message.service';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { userObject } from '@shared/interfaces/userObject';
import { AuthService } from '@shared/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  mouseOverRegister: boolean = false;
  registerForm: FormGroup;

  onSubmit(registerObject: userObject): void {
    console.log(registerObject)
    if (!this.registerForm.invalid) {
      this.authService.userRegister(registerObject).subscribe(
        res => {
          this.messageService.handleSuccess('Registration successful');
          console.log(res);
          localStorage.setItem('token', '4179bafbbdcdc6dca8c4bf02f199c74848fc045d');
          localStorage.setItem('userDetails', JSON.stringify(res));
          this.authService.setStatus(true);
          this.router.navigate([ 'user/details' ]);
        },
        err => {
          this.messageService.handleError(err);
        }
      )



    }
  }
  msgObject = {
    email: {
      required: 'required',
      notValid: 'this is not valid email adress'
    },
    passwords: {
      required: 'required',
      mismatch: 'the two passwords are not the same',
      characters: 'must contain one uppercase letter and one number'
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      user: [null, Validators.required],
      phone: [null, null],
      email: [null, [Validators.email, Validators.required]],
      paswordGroup: this.formBuilder.group({
        pass: [null, [passwordCheck, Validators.required]],
        passRepeat: [null, Validators.required],
      }, { validator: machPasswords })
    })
  }

}

function machPasswords(group: AbstractControl): { [key: string]: boolean | null } {
  const password = group.get('pass');
  const repeatedPassword = group.get('passRepeat')
  if (password.value === repeatedPassword.value) {
    return null;
  } else {
    return { 'passworMistmatch': false };
  }
}

function passwordCheck(control: AbstractControl): { [key: string]: boolean | null } {
  const password = control.value;
  let num = /\d/;
  let uppercase = /[A-Z]/g;

  if (password) {
    let isNum = num.test(password);
    let isUppercase = uppercase.test(password);
    if (isUppercase && isNum) return null;
    else {
      return { 'paswordCheck': true };
    }
  }
}
