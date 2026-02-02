import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDetails } from './cart-details';

describe('CartDetails', () => {
  let component: CartDetails;
  let fixture: ComponentFixture<CartDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
