import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajePage } from './viaje.page';
import { ActivatedRoute } from '@angular/router';

describe('ViajePage', () => {
  let component: ViajePage;
  let fixture: ComponentFixture<ViajePage>;

  const mock = {
    snapshot:{
      params: { destino : 'asd123'}
    }
  } 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{provide: ActivatedRoute,useValue:mock}]
    })
    fixture = TestBed.createComponent(ViajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
