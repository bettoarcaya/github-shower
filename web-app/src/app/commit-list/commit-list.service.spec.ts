import { TestBed } from '@angular/core/testing';

import { CommitListService } from './commit-list.service';

describe('CommitListService', () => {
  let service: CommitListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommitListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
