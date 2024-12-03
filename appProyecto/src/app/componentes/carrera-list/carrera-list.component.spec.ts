import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraListComponent } from './carrera-list.component';

describe('CarreraListComponent', () => {
  let component: CarreraListComponent;
  let fixture: ComponentFixture<CarreraListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarreraListComponent]
    });
    fixture = TestBed.createComponent(CarreraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
