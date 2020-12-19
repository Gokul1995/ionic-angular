import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {};
  isInvalidCredential = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(credential) {
    console.log('Login value : ', credential);
    this.isInvalidCredential = false;
    if(this.isValidCredential(credential)) {
      this.router.navigate(['/home']);
    } else {
      console.log('CLear input show error : ')
      this.isInvalidCredential = true;
    }
  };

   isValidCredential(data) {
    
    return (data.name === 'gokul' && data.password==="gokul");
  }

}
