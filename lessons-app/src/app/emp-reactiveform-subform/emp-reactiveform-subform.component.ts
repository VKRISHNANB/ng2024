import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-reactiveform-subform',
  templateUrl: './emp-reactiveform-subform.component.html',
  styleUrls: ['./emp-reactiveform-subform.component.css']
})
export class EmpReactiveformSubformComponent implements OnInit {
  employeeFormGroup: FormGroup;
  empRecord: any = {
    firstName: 'Venkat',
    lastName: 'Krishnan',
    email: 'vkrishnanb@gmail.com',
    mobile: '1112223330'
  }
  constructor() {
    this.employeeFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(''),
      emailGroup: new FormGroup({
        // email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        email: new FormControl('', [Validators.required, Validators.email]),
        confirmEmail: new FormControl('', [Validators.required, Validators.email]),
      }),
      mobile: new FormControl(''),
      sendNotification: new FormControl('email'),
      range: new FormControl('')
    }); // end of outer form group
  } // end of constructor

  ngOnInit(): void { }

  /**
  * ! is non-null assertion operator (post-fix expression)
  * - it just saying to type checker that you're sure that a is 
  * not null or undefined.
  * the operation 'a!' produces a value of the type of 'a' with 
  * null and undefined excluded
  * if 'a' is of type 'String' then 'a!' ensure that it will return
  * a String value , and not NULL, or UNDEFINED
  */
  get firstName() { return this.employeeFormGroup.get('firstName')!; }
  get range() { return this.employeeFormGroup.get('range')!; }
  // get email() { return this.employeeFormGroup.get('email')!; }
  get emailGroup() {
   return  ((this.employeeFormGroup.get('emailGroup') as FormGroup).controls)!;
    //  return this.employeeFormGroup.get('emailGroup')!;
     }
  get mobile() { return this.employeeFormGroup.get('mobile')!; }
 // get employeeFormGroup(){  return this.employeeFormGroup;}

  loadEmployee() {
    let data = {
      firstName: 'Venkat',
      lastName: 'Krishnan',    
      emailGroup: {
        email: 'vkrishnanb@gmail.com',
        "confirmEmail": ""
      },
      "mobile": "1112223330",
      "sendNotification": "sms",
      "range": ""
    }
    this.employeeFormGroup.patchValue(data);
  }

  doNotification(msgtype: any) {
    if (msgtype === 'sms') {
      let mobileControl = this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators(
        [Validators.required]);
      mobileControl?.updateValueAndValidity();
    }
  }
  addNewEmployee(emp: any) {
    console.log(emp.value);
  }
}
