import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSignalBasketUi } from './cart-signal-basket-ui';

describe('CartCount', () => {
  let component: CartSignalBasketUi;
  let fixture: ComponentFixture<CartSignalBasketUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSignalBasketUi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSignalBasketUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
