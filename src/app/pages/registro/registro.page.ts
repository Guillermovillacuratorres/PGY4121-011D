import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  correo:string = "";
  contrasena:string = "";

  constructor(private firebase:FirebaseService) { }

  ngOnInit() {
  }

  registro(){
    this.firebase.registro(this.correo,this.contrasena);
  }

}
