import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  correo:string = "";
  

  constructor(private activateRoute:ActivatedRoute,
              private router:Router
  ) { }

  ngOnInit() {
    this.correo = this.activateRoute.snapshot.params["correo"];
    console.log("PARAMETRO URL  ----> ", this.correo);
    
  }


  viaje(){
    let destino = "Argentina";
                      //path: 'viaje/:destino',
    this.router.navigateByUrl('viaje/' + destino);
  }

}
