import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit, OnDestroy {

  constructor(private activateRoute:ActivatedRoute) { }

  
  ngOnDestroy(): void {
    console.log("destruyendo!!");
    
  }

  destino:string = "";

  ngOnInit() {
    this.destino = this.activateRoute.snapshot.params['destino'];
    console.log("DESTINO ", this.destino);
    
  }




}
