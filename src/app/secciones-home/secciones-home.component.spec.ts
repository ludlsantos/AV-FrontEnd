import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesHomeComponent } from './secciones-home.component';


describe('SeccionesHomeComponent', () => {
  let component: SeccionesHomeComponent;
  let fixture: ComponentFixture<SeccionesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
