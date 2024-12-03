import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasFormComponent } from './asignaturas-form.component';

describe('AsignaturasFormComponent', () => {
  let component: AsignaturasFormComponent;
  let fixture: ComponentFixture<AsignaturasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignaturasFormComponent]
    });
    fixture = TestBed.createComponent(AsignaturasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
