import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumasigListComponent } from './alumasig-list.component';

describe('AlumasigListComponent', () => {
  let component: AlumasigListComponent;
  let fixture: ComponentFixture<AlumasigListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumasigListComponent]
    });
    fixture = TestBed.createComponent(AlumasigListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
