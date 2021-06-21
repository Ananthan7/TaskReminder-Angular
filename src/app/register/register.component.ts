import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm= this.fb.group({
    email:['',[Validators.required,Validators.email]],
    uname:['', [Validators.required,Validators.minLength(4), Validators.pattern('[0-9]*')]],
    pswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],

  })
  
  constructor(private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
