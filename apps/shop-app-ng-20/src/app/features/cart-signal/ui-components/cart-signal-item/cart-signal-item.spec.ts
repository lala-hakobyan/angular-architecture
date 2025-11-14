import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSignalItem } from './cart-signal-item';

describe('CartItem', () => {
  let component: CartSignalItem;
  let fixture: ComponentFixture<CartSignalItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSignalItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSignalItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
