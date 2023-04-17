import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-regiter',
  templateUrl: './user-regiter.component.html',
  styleUrls: ['./user-regiter.component.css']
})
export class UserRegiterComponent {
registerationForm:FormGroup;
constructor() {

}
ngOnInit()
{
  this.registerationForm=new FormGroup({
    userName: new FormControl(null,Validators.required),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.minLength(8)]),
    confirmPassword: new FormControl(null,Validators.required),
    mobile: new FormControl(null,[Validators.required,Validators.minLength(10)])

  },
  {validator:this.ConfirmedValidator('password', 'confirmPassword')});
}

// passwordMatchingValidator(fg:FormGroup):Validators{

//   return fg.get('password').value===fg.get('confirmPassword').value?null:
//   {notmatch:true};
// }
passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
  return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
    { passwordMismatch: true }
};

 ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}
//------------------------------------
//Getter methods for all form controls
//------------------------------------
get userName()
{
  return this.registerationForm.get('userName')as FormControl;
}
get email()
{
  return this.registerationForm.get('email')as FormControl;
}
get password()
{
  return this.registerationForm.get('password')as FormControl;
}
get confirmPassword()
{
  return this.registerationForm.get('confirmPassword')as FormControl;
}
get mobile()
{
  return this.registerationForm.get('mobile')as FormControl;
}
//------------------------------------------------------------

onSubmit()
{
  console.log(this.registerationForm);
}
}
