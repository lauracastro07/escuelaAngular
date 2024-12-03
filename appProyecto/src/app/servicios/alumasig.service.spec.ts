import { TestBed } from '@angular/core/testing';

import { AlumasigService } from './alumasig.service';

describe('AlumasigService', () => {
  let service: AlumasigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumasigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
