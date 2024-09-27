import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo:string = "";
  contrasena:string = "";





  constructor(private router:Router, private firebase:FirebaseService, private helper:HelperService) { }

  ngOnInit() {
  }


  login(){
  
    if (this.correo == "") {
      this.helper.showAlert("Ingrese el correo", "Error de validación");
      return;
    }
    if (this.contrasena == "") {
      this.helper.showAlert("Ingrese la contraseña", "Error de validación");
      return;
    }
    /* if (this.correo == "123" && this.contrasena == '123') {
      this.router.navigateByUrl("/inicio");
    }else{
      alert("Credenciales incorrectas.");
    } */
    this.firebase.login(this.correo,this.contrasena);
    this.router.navigateByUrl("/inicio");
  }

  resetPw(){
    this.router.navigateByUrl("reset-password");
  }

  registro(){
    this.router.navigateByUrl("registro");
  }

}
