import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBasket } from './cart-basket';

describe('CartBasket', () => {
  let component: CartBasket;
  let fixture: ComponentFixture<CartBasket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartBasket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartBasket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
