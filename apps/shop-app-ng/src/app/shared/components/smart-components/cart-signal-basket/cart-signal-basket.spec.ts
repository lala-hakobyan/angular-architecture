import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSignalBasket } from './cart-signal-basket';

describe('CartBasket', () => {
  let component: CartSignalBasket;
  let fixture: ComponentFixture<CartSignalBasket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSignalBasket]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSignalBasket);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
