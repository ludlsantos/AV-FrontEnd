import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarMailComponent } from './confirmar-mail.component';

describe('ConfirmarMailComponent', () => {
  let component: ConfirmarMailComponent;
  let fixture: ComponentFixture<ConfirmarMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
