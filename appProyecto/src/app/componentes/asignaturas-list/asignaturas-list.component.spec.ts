import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasListComponent } from './asignaturas-list.component';

describe('AsignaturasListComponent', () => {
  let component: AsignaturasListComponent;
  let fixture: ComponentFixture<AsignaturasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignaturasListComponent]
    });
    fixture = TestBed.createComponent(AsignaturasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
