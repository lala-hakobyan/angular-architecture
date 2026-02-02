import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartSignal } from './shopping-cart-signal';

describe('ShoppingCart', () => {
  let component: ShoppingCartSignal;
  let fixture: ComponentFixture<ShoppingCartSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
