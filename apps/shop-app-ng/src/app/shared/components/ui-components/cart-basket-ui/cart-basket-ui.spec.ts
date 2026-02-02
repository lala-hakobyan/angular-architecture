import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBasketUi } from './cart-basket-ui';

describe('CartCount', () => {
  let component: CartBasketUi;
  let fixture: ComponentFixture<CartBasketUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartBasketUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartBasketUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
