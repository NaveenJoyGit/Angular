import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  tokenobj : any;

  // username = "";
  // password = "";

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  submit() {
    if(this.formGroup.valid) {
      this.service.generateToken(this.formGroup.value).subscribe(data => {
        console.log(data);
        this.tokenobj = data;
        console.log(this.tokenobj.token);
        sessionStorage.setItem('token', this.tokenobj.token);
        this.router.navigateByUrl('movie-list-customer');
      })
    }

    // this.service.generateToken(data).subscribe(data => {
    //   console.log(data);
    // });

    // this.router.navigateByUrl('movie-list-customer');
  }

  constructor(private router: Router, private service: TokenService) { }

  ngOnInit(): void {
    this.initForm();
  }

}