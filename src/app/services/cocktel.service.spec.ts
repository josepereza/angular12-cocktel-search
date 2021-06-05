import { TestBed } from '@angular/core/testing';

import { CocktelService } from './cocktel.service';

describe('CocktelService', () => {
  let service: CocktelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
