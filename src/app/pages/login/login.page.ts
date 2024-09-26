import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo:string = "";
  contrasena:string = "";





  constructor(private router:Router, private firebase:FirebaseService) { }

  ngOnInit() {
  }


  login(){
  
    if (this.correo == "") {
      alert("Ingrese un correo");
      return;
    }
    if (this.contrasena == "") {
      alert("Ingrese una contraseña");
      return;
    }
    /* if (this.correo == "123" && this.contrasena == '123') {
      this.router.navigateByUrl("/inicio");
    }else{
      alert("Credenciales incorrectas.");
    } */
    this.firebase.login(this.correo,this.contrasena);
  }

}
