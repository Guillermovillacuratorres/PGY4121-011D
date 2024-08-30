import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo:string = "";
  contrasena:string = "";





  constructor(private router:Router) { }

  ngOnInit() {
  }


  login(){
                    //  path: 'inicio/:correo',     
    this.router.navigateByUrl("/inicio/" + this.correo);
  }

}
