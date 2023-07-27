import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup,FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthguardServiceService } from "src/app/authguard-service.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginform = new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),

  })
  userData:any;
  loading = false;
  user: any;
  constructor(private route:Router,private fb:FormBuilder) {
    this.loginform=this.fb.group({
      email:['',Validators.required],
    password:['',Validators.required],
    })
  }

  ngOnInit() {
    // this.user.currentUserData.subscribe((userData:any) => (this.userData = userData));
  }

  changeData(event:any) {
    var msg = event.target.value;
    this.user.changeData(msg);
  }
  login() {
    console.log("fdff")
    if(this.loginform.valid){
    let formValue:any = localStorage.getItem('formdata')
    
      console.log(JSON.parse(formValue),'uuuu')
      this.route.navigate(['dashboard']) 
    }
  }
}
