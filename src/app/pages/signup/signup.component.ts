import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {
 user:any[]=[];
  value = "";
  myform = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    c_password: new FormControl(''),

  });
  constructor(private route:Router, private fb:FormBuilder) { 
  this.myform=this.fb.group({
    name: ['',Validators.required],
    phone: ['',Validators.required],
    email: ['',Validators.required],
    password: ['',Validators.required],
    c_password: ['',Validators.required]
  })
  }

  ngOnInit() {
  }
  signUp(){
    if(this.myform.valid){
   let userdata={
      name : this.myform.value.name,
      phone:this.myform.value.phone,
      email:this.myform.value.email,
      password:this.myform.value.password,
      c_password:this.myform.value.c_password,
   }
    
    this.user.push(userdata);
    localStorage.setItem('formdata', JSON.stringify(this.user));
    console.log(this.user,'this.myform.value')
    this.route.navigate(['login'])

    
  }
}

  
  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    
}}