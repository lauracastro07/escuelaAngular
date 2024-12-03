import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumasigFormComponent } from './alumasig-form.component';

describe('AlumasigFormComponent', () => {
  let component: AlumasigFormComponent;
  let fixture: ComponentFixture<AlumasigFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumasigFormComponent]
    });
    fixture = TestBed.createComponent(AlumasigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
