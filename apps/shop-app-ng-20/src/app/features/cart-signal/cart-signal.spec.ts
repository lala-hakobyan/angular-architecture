import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSignal } from './cart-signal';

describe('CartSignal', () => {
  let component: CartSignal;
  let fixture: ComponentFixture<CartSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSignal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSignal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
