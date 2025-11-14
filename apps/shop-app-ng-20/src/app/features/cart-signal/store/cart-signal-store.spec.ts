import { TestBed } from '@angular/core/testing';
import {CartStore} from '../../../shared/store/cart-store';


describe('CartStore', () => {
  let service: CartStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
