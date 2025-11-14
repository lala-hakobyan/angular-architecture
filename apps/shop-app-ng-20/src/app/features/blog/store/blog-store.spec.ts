import { TestBed } from '@angular/core/testing';

import { BlogStore } from './blog-store';

describe('BlogStore', () => {
  let service: BlogStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
